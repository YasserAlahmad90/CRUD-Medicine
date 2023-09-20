import { Fragment } from "react";
import React,{Component}from "react";
class MedicineShow extends Component{
state={
    isEdit:false
}


    toggle=()=>{
let {isEdit}=this.state
this.setState({isEdit:!isEdit})

    }
    //render medicine
    renderMedicine=()=>{
       return(
        <div>
 
<li>
<span>{this.props.details.price}</span>
<span>{this.props.details.name}</span> 
<button onClick={()=>{this.toggle()}}>Edit medicine</button>
 <button onClick={()=>{this.props.deleteMedicine(this.props.index)}} className="delete">Delete medicine</button>
</li>
        </div>
      
       ) 
    }

    //update medicine after edit
updateEditMedicine=(e)=>{
    e.preventDefault();
    console.log(e.target.name.value)
    console.log(e.target.price.value)
   //this.props.editMedicine(this.props.index,this.input.value);
   this.props.editMedicine(this.props.index,e.target.name.value,e.target.price.value);
   this.toggle();
  }


  
    //render update form
    renderUpdateForm=()=>{
        return(
            <form onSubmit={this.updateEditMedicine}>
                <input id='price' type="text" defaultValue={this.props.details.price} ref={(v)=>{this.input=v}}/>
                <input id='name' type="text" defaultValue={this.props.details.name} ref={(v)=>{this.input=v}}/>

                <button>Update medicine</button>

            </form>
        )
    }
    render()
    {
        let {isEdit}=this.state
        return(
            <Fragment>
             {isEdit?this.renderUpdateForm():this.renderMedicine()} 
            </Fragment>
        )
    }
   
    
       
    
}

export default MedicineShow;
