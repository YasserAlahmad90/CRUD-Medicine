import React,{Component} from 'react'
import './App.css';
import MedicineForm from './components/MedicineForm';
import MedicineShow from './components/MedicineShow'
class App extends Component{
  state={
    medicines:[
      {name:'panadol',
      id:1,
      price:'1$'
      },
      {name:'devomite',
      id:2,
      price:'1.5$'
       },
      {name:'flagyl',
      id:3,
      price:'1.45$'
       }
    ],
    current:[{currentname:'',currentprice:''}],
    

  }
 //update state
 updateMedicine=(e)=>{
  console.log(e.target.value)
  this.setState(
    { currentname:e.target.value})
   }
   

   updateMedicineprice=(e)=>{
    console.log(e.target.value)
    this.setState(
      { currentprice:e.target.value})
     }
//add medicine
addMedicine=(e)=>{
  e.preventDefault();
  console.log("add medicine"); 
  let {medicines}=this.state
  let {currentname}=this.state
  let {currentprice}=this.state

  medicines.push(
    {name:currentname,price:currentprice})
    this.setState(
      {medicines,
      currentname:'',
    currentprice:''}
      )
}


//delete medicine
deleteMedicine=(index)=>{
let {medicines}=this.state
console.log(index)
medicines.splice(index,1);
this.setState({medicines})
}

//edit medicine
editMedicine=(index,value,price)=>{
let {medicines}=this.state
let medicine=medicines[index]
medicine['name']=value
medicine['price']=price
this.setState({medicines:medicines})
}


  render(){
 const {medicines}=this.state
 const lenghtMedicines=medicines.length
 console.log(lenghtMedicines)
 
 const medicinesList=lenghtMedicines?

 (

  medicines.map((medicine,index)=>
 {
  return(

    
    <MedicineShow details={medicine} key={index} deleteMedicine={this.deleteMedicine} index={index} currentname={this.currentname}  editMedicine={this.editMedicine} currentprice={this.currentprice}/>   

  ) 
 })
 )
 :
 (  <p>No show items in Medicines :)</p> )





    return (
      <section className="App">
        <h2>CRUD Medicine</h2>
        <div className='header'>
          
               <span className='th1'>Price</span>
              <span className='th2'>Name</span>
            <span>Action</span>
            
        </div>
        
        <ul>{medicinesList}</ul>
      <MedicineForm updateMedicine={this.updateMedicine} addMedicine={this.addMedicine} currentname={this.state.currentname} currentprice={this.state.currentprice} updateMedicineprice={this.updateMedicineprice}/>
      </section>
    );
  }
}
export default App;
