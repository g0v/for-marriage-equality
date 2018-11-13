export enum CanvassType {
    spreadFlyers,
    dialogue,
    labor,
    streetRoaming,
    stall,
    none
}

function canvassType(raw: string): CanvassType {
    if(raw===null) return CanvassType.none;
    if(raw.indexOf("發文宣") != -1) return CanvassType.spreadFlyers;
    if(raw.indexOf("對話") != -1) return CanvassType.dialogue;
    if(raw.indexOf("代工") != -1) return CanvassType.labor;
    if(raw.indexOf("掃街") != -1) return CanvassType.streetRoaming;
    if(raw.indexOf("擺攤") != -1) return CanvassType.stall;
    return CanvassType.none;
}

export enum Area {
    taipeiKeelung,
    taoyuanHsinchuMiaoli,
    taichungChanghuaNantou,
    yunlinChiayiTainan,
    kaohsiungPingtung,
    yilanHualienTaitung,
    outlyingIslands,
    none
}

function findArea(raw: string): Area {
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

export default class Canvass {
    public notes: string;
    public area: Area;
    public name: string;
    public contactInfo: string;
    public volunteersNeeded: number;
    public startTime: string;
    public endTime: string;
    public date: string;
    public type: CanvassType;
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
            this.type             = canvassType(rawItem["開團形式"]);
            this.location         = rawItem["地點"];
            this.flyers           = rawItem["預計發出文宣份數"];
            this.line             = rawItem["Line"];
            this.phone             = rawItem["電話"];
        }
    getType(): string {
        switch(this.type) {
            case CanvassType.spreadFlyers: return "發文宣";
            case CanvassType.dialogue: return "對話";
            case CanvassType.labor: return "代工";
            case CanvassType.streetRoaming: return "掃街";
            case CanvassType.stall: return "擺攤";
            default: return "無";
        }
    }
    getArea(): String {
        switch(this.area) {
            case Area.taipeiKeelung: return "北北基";
            case Area.taoyuanHsinchuMiaoli: return "桃竹苗";
            case Area.taichungChanghuaNantou: return "中彰投";
            case Area.yunlinChiayiTainan: return "雲嘉南";
            case Area.kaohsiungPingtung: return "高屏";
            case Area.yilanHualienTaitung: return "宜花東";
            default: return "無";
        }
    }
}