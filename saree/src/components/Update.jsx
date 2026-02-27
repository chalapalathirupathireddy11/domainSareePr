import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams ,useNavigate } from 'react-router-dom';


const Update = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    const [data,setData]=useState([])
    const [image,setImage]=useState(null)
    const [types,setTypes]=useState([])
    const [designs,setDesigns]=useState([]);
    const [ethinicWaves,setEthinicWaves]=useState([])
    const [brands,setBrands]=useState([])
    const [form,setForm]=useState([])
    const [data1,setData1]=useState({products :[]})
     useEffect (()=>{
        axios.get(`http://localhost:8081/order/Products/fetch/Products/${id}`)
        .then((res)=>{
            setData(res.data);
            setForm(res.data)
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[id])

    useEffect (()=>{
        const productId=parseInt(id);
        console.log(productId)
        axios.get(`http://localhost:8081/order/Products/fetch/image/${productId}`,{
                              responseType:"blob"})
                              .then((res)=>{
                                const imageUrl=URL.createObjectURL(res.data);
                                setData(res.data)
                                setImage(imageUrl)
                              })
    },[id])
    useEffect(()=>{
          axios.get("http://localhost:8081/order/Types/fetchAll/types")
            .then((res)=>{
              console.log(res.data)
              setTypes(res.data)
            })
            .catch((error)=>{
              console.error(error)
            });
        },[data.typesId]);
    
        
       useEffect(()=>{
          axios.get("http://localhost:8081/order/EthnicWave/fetchAll/EthnicWave")
            .then((res)=>{
              console.log(res.data)
              setEthinicWaves(res.data)
              // window.location.reload();
            })
            .catch((error)=>{
              console.error(error)
            });
          },[data.ethnicWaveId]);
    
       useEffect(()=>{
          axios.get("http://localhost:8081/order/Brand/fetchAll/Brand")
            .then((res)=>{
              console.log(res.data)
              setBrands(res.data)
              // window.location.reload();
            })
            .catch((error)=>{
              console.error(error)
            });
          },[data.brandsId]);
          
      useEffect(()=>{
        axios.get("http://localhost:8081/order/Design/fetchAll/Designs")
          .then((res)=>{
            console.log(res.data)
            setDesigns(res.data)
            // window.location.reload();
          })
          .catch((error)=>{
            console.error(error)
          });
        },[data.designsId]);

  const handleUpdate = async (e)=>
    {
      
      const formData = new FormData();

      setData1({ ...data1, products: [...data1.products, form] });
      formData.append("products", new Blob([JSON.stringify(form)] , { type: "application/json" }));
      console.log("check",image instanceof File)
      if(image instanceof File){
        formData("file",image)
      }else{
      formData.append("file", new File([""], "dummy.jpg", { type: "image/jpeg" })); // Append only if it's a real File
      console.log(null)
      }
     
       
      console.log("form",form)
     
      console.log(formData)
     
      try{
       
        await axios.put("http://localhost:8081/order/Products/update/Products",formData,
          {headers:{ 
           
          }
        }
          
          
      ).
        then((res)=>{
          console.log(res.data)
          navigate(`/view/${id}`)
          console.log(res.data)
        })
      }
      catch (error) {
          console.log(error)
      }
    }   

  return (
    <div>
         <section class="inner-banner py-5">
            <div class="w3l-breadcrumb py-lg-5">
                <div class="container pt-4 pb-sm-4">
                    <h4 class="inner-text-title pt-5">Update</h4>
                    <ul class="breadcrumbs-custom-path">
                        <li><a href={"@{/home}"}>Home</a></li>
                        <li class="active"><i class="fas fa-angle-right"></i>Update</li>
                    </ul>
                </div>
            </div>
        </section>
        <div class="w3l-grids-block-5 py-5">
            <div class="container py-md-5 py-4">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="coursecard-single">
                            <div class="grids5-info position-relative">
                                
                                <div class="meta-list">
                                    <a>Design</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>

        <section class="w3l-contact py-5" id="contact">
            <div class="container py-md-5 py-4">
                <div class="title-main text-center mx-auto mb-md-5 mb-4">
                    <h3 class="title-style">UPDATE Form</h3>
                </div>
                <div class="row login-block">
                    <div class="col-md-7 login-center">
                        <ul>
                            <li class="alert alert-danger" role="alert"/>
                        </ul>
                        <form>
                            <div class="title-main text-center mx-auto mb-md-5 mb-4">
                                <p class="text-uppercase">Personal Details</p>
                            </div>
                            <div class="input-grids">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Name" value={form.title} class="contact-input" onChange={ (e) => setForm({...form,title: e.target.value})} />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="number" accept='any' placeholder="Name"class="contact-input" value={form.price} onChange={ (e) => setForm({...form,price: e.target.value})} />
                                    </div>
                                </div>
                                <div class="row justify-content-around ">
                                    <select class="input-group-text row-sm-5" name="ethnicWave" value={form.ethnicWaveId}  
                                    onChange={ (e) => setForm({...form,ethnicWaveId:parseInt(e.target.value)})}>
                                        <option value="" >Select Ethnic Style</option>
                                        {ethinicWaves.map((e) =>
                                            <option key={e.id} value={e.id} > {e.style}</option>)}
                                    </select>
                                    <select class="input-group-text row-sm-5" name="design" value={form.designsId} 
                                    onChange={ (e) => setForm({...form,designsId:parseInt(e.target.value)})}>
                                        <option value="" >select Design</option>
                                        {designs.map((d) =>
                                            <option key={d.id} value={d.id} >{d.pattern}</option>)}
                                    </select>
                                </div>        
                                <div class="row justify-content-around">
                                    <select class="input-group-text row-sm-6 " name="type" value={form.typesId} onChange={ (e) => setForm({...form,typesId:parseInt(e.target.value)})} >
                                        <option  value="" >Select Type</option>
                                        {types.map((t) => (<option key={t.id} value={t.id} >{t.name }</option>
                                            ))}
                                    </select>
                                    <select class="input-group-text row-sm-5" name="brand" value={form.brandsId}
                                    onChange={ (e) => setForm({...form,brandsId:parseInt(e.target.value)})}
                                        >
                                        <option value="" >Select Brand</option>
                                            {brands.map((b) =>
                                            <option class="col-sm-6" key={b.id} value={b.id} defau="selectBrand" >{b.title}</option>)}    
                                    </select>
                                </div>

                                
                                <div class="row">
                                    <div class="col-sm-6">
                                        <img src={image} alt="" class="img-fluid"  />
                                    </div>
                                    <div class="col-sm-6">
                                        <textarea type="text" accept='/image' placeholder="Enter the deatils abount on product"class="contact-input" value={form.description} onChange={(e) => setForm({...form,description:e.target.value })} />
                                    </div>
                                    
                                </div>
                                
                                <div class="row">
                                    <div class="col-sm-6">
                                        <input type="file" accept="image/*"  class="custom-file-input" id="validatedCustomFile customFile" value={form.image} //onChange={handleFileChange} required/>
                                        onChange={async (e) => {const file = e.target.files[0];
                                                                                                if (file !== null || file !== undefined) {
                                                                                                
                                                                                                    const isValidImage = file.type.endsWith("jpeg") || file.type.endsWith("png") || file.type.endsWith("jpg") || file.type.endsWith("PNG");
                                                                                                    if (isValidImage) {
                                                                                                        setImage(file) 
                                                                                                    } else {
                                                                                                        setImage(image)
                                                                                                    console.log(isValidImage);
                                                                                                    alert("Please select a valid image file.");
                                                                                                    }
                                                                                                }
                                                                                                else{
                                                                                                    
                                                                                                    setImage(null)
                                                                                                }
                                                                                                }}  />  
                                    </div>
                                    
                                </div>

                                
                            </div>
                            <div class="col-md-3 login-center text-start">
                                <button class="btn btn-style btn-style-3" onClick={handleUpdate}>Update</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default Update