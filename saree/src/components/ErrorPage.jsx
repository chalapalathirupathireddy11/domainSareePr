import React from 'react'

const ErrorPage = () => {
  return (
    <div>
        <section class="inner-banner py-5">
            <div class="w3l-breadcrumb py-lg-5">
                <div class="container pt-4 pb-sm-4">
                    <h4 class="inner-text-title pt-5">Oops...</h4>
                    <ul class="breadcrumbs-custom-path">
                        <li><a 
                        // th:href="@{/home}"
                        >Home</a></li>
                        <li class="active"><i class="fas fa-angle-right"></i>Error</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="page_404">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1  text-center">
                            <div class="four_zero_four_bg">
                                <h1 class="text-center">oops...</h1>
                            </div>
                            <div class="contant_box_404">
                                <h3 class="h2">Look like Some Thing Wrong</h3>
                                <p 
                                // th:text="${'Error Message - ' + errormsg}"
                                ></p>
                                <a 
                                 class="link_404 btn btn-style btn-style-3"
                                >Go to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <button onclick="topFunction()" id="movetop" title="Go to top">
            <span class="fas fa-level-up-alt" aria-hidden="true"></span>
        </button>
    </div>
  )
}

export default ErrorPage