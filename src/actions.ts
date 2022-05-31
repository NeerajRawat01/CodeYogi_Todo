export const TODO_ADDED:string= "TODO_ADDED";
export const TODO_STATUS_CHANGE: string = "TODO_STATUS_CHANGE";
export const TODO_DELETE: string = "TODO_DELETE";

export const todoAdd = (  title: string)=>
{
    return {
      type: TODO_ADDED,
      payload: { id:title, title:title, done:false }
    };

}

export const todoStatusChange = (id: string) => {
  return {
    type: TODO_STATUS_CHANGE,
    payload:  id 
  };
};


export const todoDelete = (id: string) => {
  return {
    type: TODO_DELETE,
    payload:  id ,
  };
};