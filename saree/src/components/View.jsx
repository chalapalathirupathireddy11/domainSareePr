import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const View = () => {
    const {id}=useParams();
    const [value,setData]=useState([])
    const [image,setImage]=useState(null)
    const [types,setTypes]=useState('')
    const [designs,setDesigns]=useState('');
    const [ethinicWaves,setEthinicWaves]=useState('')
    const [brands,setBrands]=useState('')
    const [title,setTitle]=useState('');
    const [description,setDescription] = useState("")
    const [price,setPrice]=useState("")

     useEffect (()=>{
        axios.get(`http://localhost:8081/order/Products/fetch/Products/${id}`)
        .then((res)=>{
            setData(res.data);
            console.log(res.data)
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
            // window.location.reload();
        })
        .catch((error)=>{
            console.log(error)
        })
    },[id])

    useEffect (()=>{
        const productId=id;
        axios.get(`http://localhost:8081/order/Products/fetch/image/${productId}`,{
                              responseType:"blob"})
                              .then((res)=>{
                                const imageUrl=URL.createObjectURL(res.data);
                                setData(value)
                                setImage(imageUrl)
                                // useNavigate(0);
                              })
    },[id])
    useEffect(()=>{
          axios.get("http://localhost:8081/order/Types/fetchAll/types")
            .then((res)=>{
              console.log(res.data)
              setTypes(res.data[value.typesId-1].name)
              // window.location.reload();
            })
            .catch((error)=>{
              console.error(error)
            });
        },[value.typesId]);
    
        
       useEffect(()=>{
          axios.get("http://localhost:8081/order/EthnicWave/fetchAll/EthnicWave")
            .then((res)=>{
              console.log(res.data)
              setEthinicWaves(res.data[(value.ethnicWaveId)-1].style)
              // window.location.reload();
            })
            .catch((error)=>{
              console.error(error)
            });
          },[value.ethnicWaveId]);
    
       useEffect(()=>{
          axios.get("http://localhost:8081/order/Brand/fetchAll/Brand")
            .then((res)=>{
              console.log(res.data)
              setBrands(res.data[value.brandsId-1].title)
              // window.location.reload();
            })
            .catch((error)=>{
              console.error(error)
            });
          },[value.brandsId]);
          
      useEffect(()=>{
        axios.get("http://localhost:8081/order/Design/fetchAll/Designs")
          .then((res)=>{
            console.log(res.data)
            setDesigns(res.data[value.designsId-1].pattern)
            // window.location.reload();
          })
          .catch((error)=>{
            console.error(error)
          });
        },[value.designsId]);


    const handleSubmit =(value)=>{
      // Navigate(`/update/${value}`)
      window.location.href = `/update/${value}`; // hard redirect
      // window.location. 


    }
    const handleDelete = async (value)=>{
      try{
      await axios.delete(`http://localhost:8081/order/Products/delete/product/${value}`)
      .then((e)=>{
          
          console.log("the id has deleted",e);
          window.location.href="/sarees"

        })
      }
      catch(error)  {
        console.error('Fetch error:', error);
        }
    }

     const handleLogin = async (e)=>{
        try {
            await axios.post()
        } catch (error) {
            
        }
    }
  return (
    <div>
        <section class="inner-banner py-5">
            <div class="w3l-breadcrumb py-lg-5">
                <div class="container pt-4 pb-sm-4">
                    <h4 class="inner-text-title pt-5">Sarees</h4>
                    <ul class="breadcrumbs-custom-path">
                        <li><a 
                        // th:href="@{/home}"
                        >Designs</a></li>
                        <li class="active"><i class="fas fa-angle-right"></i>Sarees</li>
                    </ul>
                </div>
            </div>
        </section>
        <div class="w3l-grids-block-5 py-5">
            <div class="container py-md-5 py-4">
                <div class="title-main text-center mx-auto mb-md-5 mb-4">
                    <p class="text-uppercase">Best Design Sarees</p>
                    <h3 class="title-style">Find The Right Sarees For You</h3>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="coursecard-single">
                            
                            <div class="grids5-info position-relative">
                                <img src={image} alt="" class="img-fluid" />
                                <div class="meta-list">
                                    <a>Design</a>
                                </div>
                            </div>
                                <a onClick={() =>handleDelete(id)} class="btn btn-style btn-style-3 text-left">Delete</a>
                            <a /*th:href="@{/public/register}"*/ href={`/update/${id}`}  class="new-user text-right">Update</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 justify-content-between">
                        <div class="coursecard-single">
                            <div class="grids5-info position-relative">
                                {/* <img src={image} alt="" class="img-fluid" /> */}
                                <div class="meta-list">
                                    <a>View</a>
                                </div>
                            </div>
                            <div class="content-main-top">
                                <div class="content-top mb-4 mt-3">
                                    <ul class="list-unstyled d-flex align-items-center justify-content-between">
                                        <li> <i class="fas fa-book-open"></i> 43 Designs</li>
                                        <li> <i class="fas fa-star"></i> 4.9</li>
                                    </ul>
                                </div>
                                                                    
                                
                                <h4><a>{price} Rs</a></h4>
                                <h4><a> {brands} Brand</a></h4>
                                <h4><a>{ethinicWaves} ETHINIC </a></h4>
                                <h4><a> {types} TYPE </a></h4>
                                <h4><a> {designs} Designs</a></h4>
                                <p>{description}</p>

                                <h6><p> programmes covering core Designs,
                                    English, Science.</p></h6>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
        <button onclick="topFunction()" id="movetop" title="Go to top">
            <span class="fas fa-level-up-alt" aria-hidden="true"></span>
        </button></div>
  )
}

export default View