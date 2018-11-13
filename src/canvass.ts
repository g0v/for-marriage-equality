export default class Canvass {
    public notes: string;
    public area: string;
    public name: string;
    public contactInfo: string;
    public volunteersNeeded: number;
    public startTime: string;
    public endTime: string;
    public date: string;
    public type: string;
    public location: string;
    public flyers: number;
    constructor(
        rawItem: any
        ) {
            this.notes            = rawItem["備註"];
            this.area             = rawItem["區域"];
            this.date             = rawItem["開團日期"];
            this.name             = rawItem["團長名稱"];
            this.contactInfo      = rawItem["團長聯絡方式"];
            this.volunteersNeeded = rawItem["希望志工人數"];
            this.startTime        = rawItem["開始時間"];
            this.endTime          = rawItem["結束時間"];
            this.type             = rawItem["開團形式"];
            this.location         = rawItem["地點"];
            this.flyers           = rawItem["預計發出文宣份數"];
        }
}