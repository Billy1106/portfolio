export type Event = {
    id: number;
    date: string;
    organization: string;
    position: string;
    description:string;
    isShowIcon: boolean;
    icon?: any;
    iconColor?: string;
  };
  export type Project = {
    id: number;
    title: string;
    description:string;
    img:string;
    techs:any[];
    link:string;
  };

  export type Skill = {
    id: number;
    skill: string;
    description:string;
    time:number;
    percentage:any;
    tech:any;
  };

