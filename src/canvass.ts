export enum CanvassType {
    spreadFlyers,
    dialogue,
    labor,
    streetRoaming,
    stall,
    none
}

function canvassTypes(raw: string): Array<CanvassType> {
    
    var types:Array<CanvassType> = Array<CanvassType>();
    if(raw===null) {
        types.push(CanvassType.none)
    } else {
        if(raw.indexOf("發文宣") != -1) types.push(CanvassType.spreadFlyers);
        if(raw.indexOf("對話（") != -1) types.push(CanvassType.dialogue);
        if(raw.indexOf("代工") != -1) types.push(CanvassType.labor);
        if(raw.indexOf("掃街") != -1) types.push(CanvassType.streetRoaming);
        if(raw.indexOf("擺攤") != -1) types.push(CanvassType.stall);
    }
    return types;
}

export enum Area {
    taipeiKeelung=1,
    taoyuanHsinchuMiaoli,
    taichungChanghuaNantou,
    yunlinChiayiTainan,
    kaohsiungPingtung,
    yilanHualienTaitung,
    outlyingIslands,
    none
}

export function findArea(raw: string): Area {
    if(raw===null) return Area.none;
    switch(raw) {
        case "北北基": return Area.taipeiKeelung;
        case "桃竹苗": return Area.taoyuanHsinchuMiaoli;
        case "中彰投": return Area.taichungChanghuaNantou;
        case "雲嘉南": return Area.yunlinChiayiTainan;
        case "高屏": return Area.kaohsiungPingtung;
        case "宜花東": return Area.yilanHualienTaitung;
        case "離島外海": return Area.outlyingIslands;
        default: return Area.none;
    }
}

export function getArea(a: Area): String {
    switch(a) {
        case Area.taipeiKeelung: return "北北基";
        case Area.taoyuanHsinchuMiaoli: return "桃竹苗";
        case Area.taichungChanghuaNantou: return "中彰投";
        case Area.yunlinChiayiTainan: return "雲嘉南";
        case Area.kaohsiungPingtung: return "高屏";
        case Area.yilanHualienTaitung: return "宜花東";
        case Area.outlyingIslands: return "離島外海";
        default: return "無";
    }
}

export function getAreas(): Array<String> {
    let ids: Array<Area> = [];
    for (const area in Area){
      if (Number(area)) {
        ids.push(Number(area));
      }
    }
    return ids.map(getArea);
}

export default class Canvass {
    public notes: string;
    public area: Area;
    public name: string;
    public contactInfo: string;
    public volunteersNeeded: number;
    public startTime: string;
    public endTime: string;
    public date: string;
    public types: Array<CanvassType>;
    public location: string;
    public flyers: number;
    public line: string;
    public phone: string;
    constructor(
        rawItem: any
        ) {
            this.notes            = rawItem["備註"] ? rawItem["備註"] : "";
            this.area             = findArea(rawItem["區域"]);
            this.date             = rawItem["開團日期"];
            this.name             = rawItem["團長名稱"];
            this.contactInfo      = rawItem["團長聯絡方式"];
            this.volunteersNeeded = rawItem["希望志工人數"];
            this.startTime        = rawItem["開始時間"];
            this.endTime          = rawItem["結束時間"];
            this.types            = canvassTypes(rawItem["開團形式"]);
            this.location         = rawItem["地點"];
            this.flyers           = rawItem["預計發出文宣份數"];
            this.line             = rawItem["Line"] ? rawItem["Line"] : "";
            this.phone            = rawItem["電話"] ? rawItem["電話"] : "";
        }
    getType(t: CanvassType): string {
        switch(t) {
            case CanvassType.spreadFlyers: return "發文宣";
            case CanvassType.dialogue: return "對話";
            case CanvassType.labor: return "代工";
            case CanvassType.streetRoaming: return "掃街";
            case CanvassType.stall: return "擺攤";
            default: return "無";
        }
    }
    getTypes(): string {
        var typesString = "";
        for (var i = 0; i < this.types.length; i++) {
            typesString += this.getType(this.types[i])
        }
        return typesString
    }
    containsQuery(query: string): boolean {
        return this.forQuery().indexOf(query) != -1;
    }
    forQuery(): string {
        return JSON.stringify(this) + getArea(this.area) + this.getTypes();
    }
}