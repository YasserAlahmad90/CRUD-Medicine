import React from "react";

const MedicineForm=(props)=>{
    return(
        <form onSubmit={props.addMedicine}>
            <input type="text" onChange={props.updateMedicineprice} value={props.currentprice} placeholder="enter product price"/>
            <input type="text" onChange={props.updateMedicine} value={props.currentname} placeholder="enter product name"/>

            <button>Add medicine</button>
        </form>
     )
}
export default MedicineForm;