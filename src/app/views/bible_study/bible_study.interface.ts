
export class BibleStudy {
    public id: number;
    public bs_id: string;
    public term: string;
    public category_id: number;
    public year_id: number;
    public bs_name: string;
    public title: string;
    public aim: string;
    public verse: string;
    public question: string;
    public remark: string;
    public further_info: string;
    public tags: number;
    public created_at: number;
    public updated_at: number;
    
    // 
    public cover_image: string;
    constructor() {
      this.id = null;
      this.bs_id= '';
      this.term = '';
      this.category_id = null;
      this.year_id = null;
        this.bs_name = '';
        this.title = '';
        this.aim = '';
        this.verse = '';
        this.question = '';
        this.remark = '';
        this.further_info = '';
        this.tags = null;
       this.created_at = null;
        this.updated_at = null;


    
  
    }
  }