import React from 'react'

const Design = () => {
//     const [design, setDesign] = useState([]);
//   const [data,setData]=useState([])
//   const [form,setForm]=useState(null)
 
//   // useEffect (()=>{
//   //   fetch("http://localhost:3001/0")
//   //     .then((res)=>res.json)
//   //     .catch(console.log("either the data has corucpted or failed to fetch the data"));
//   // })
//   useEffect(()=>{
//     axios.get("http://localhost:8081/order/Design/fetchAll/Designs")
//       .then((res)=>{
//         console.log(res.data)
//         setDesign(res.data)
//       })
//       .catch((error)=>{
//         console.error(error)
//       });
//     },[]);
//   const handleMultiSelect =()=>{

//   }


//   useEffect(()=>{
//         axios.get("http://localhost:8081/order/Products/fetchAll/Products")
//           .then((res)=>{
//             // console.log(res.data)
//             setData(res.data)
//           })
//           .catch((error)=>{
//             console.error(error)
//           });
//         },[]);

//   useEffect(()=>{
//       const onGetImageProducts = async()=>{
//         const updateProducts =await Promise.all(
//           data.map(async(products)=>{
//             // console.log
//             try{
//               const productId=products.id;
//               console.log("productId",productId)
//               const response =await axios.get(`http://localhost:8081/order/Products/fetch/image/${productId}`,{
//                               responseType:"blob"});
//               const imageUrl=URL.createObjectURL(response.data);
//             // console.log(imageUrl);
//               return{...products,imageUrl}
            
//             // const productId=e.target.value;
      
//           }catch (error) {
//               console.log("Error fetching an image in ",products.id,error);
//                return null;  //(...products,imageUrl: )
//              }
//           }
//         )
//       );
//       setData(updateProducts);
//     };
//     if(data.length > 0 && !data[0].imageUrl){
//         onGetImageProducts();
//       }
//     },[data])




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
                <div class="title-main text-center mx-auto mb-md-5 mb-4" 
                // style="max-width:500px;"
                >
                    <p class="text-uppercase">Best Design Sarees</p>
                    <h3 class="title-style">Find The Right Sarees For You</h3>
                </div>
                <div class="row justify-content-center">

                    {/* {data.filter(e=>e.designsId===form).map((e,index) => (     */}
                        <div class="col-lg-4 col-md-6">
                            <div class="coursecard-single">
                                <div class="grids5-info position-relative">
                                    <img src="assets/images/c1.jpg" alt="" class="img-fluid" />
                                    <div class="meta-list">
                                        <a>Design</a>
                                    </div>
                                </div>
                                <div class="content-main-top">
                                    <div class="content-top mb-4 mt-3">
                                        <ul class="list-unstyled d-flex align-items-center justify-content-between">
                                            <li> <i class="fas fa-book-open"></i> 43 Designs</li>
                                            <li> <i class="fas fa-star"></i> 4.9</li>
                                        </ul>
                                    </div>
                                    <h4><a>Designs Programs</a></h4>
                                    <p> programmes covering core Designs,
                                        English, Science.</p>
                                </div>
                            </div>
                        </div>
                    {/* ))} */}
                </div>
            </div>
        </div>
        <button onclick="topFunction()" id="movetop" title="Go to top">
            <span class="fas fa-level-up-alt" aria-hidden="true"></span>
        </button>
    </div>
  )
}

export default Design