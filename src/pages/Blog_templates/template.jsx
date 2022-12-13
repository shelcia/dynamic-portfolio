const BlogTemplate = () => {

    const show1 = () => {
        document.getElementById('h1').style.opacity = "0";
        document.getElementById('h2').style.opacity = "0";
        document.getElementById('h3').style.opacity = "0";
        document.getElementById('h4').style.opacity = "0";
        document.getElementById('h5').style.opacity = "0";
        document.getElementById('h6').style.opacity = "0";
        document.getElementById('heading_2').style.opacity = "0.7";
        document.getElementById('blog').style.textDecoration = "none";
        document.getElementById('about').style.textDecoration = "underline";




    }
    const show2 = () => {
        document.getElementById('heading_2').style.opacity = "0";
        document.getElementById('h1').style.opacity = "1";
        document.getElementById('h2').style.opacity = "1";
        document.getElementById('h3').style.opacity = "1";
        document.getElementById('h4').style.opacity = "1";
        document.getElementById('h5').style.opacity = "1";
        document.getElementById('h6').style.opacity = "1";
        document.getElementById('blog').style.textDecoration = "underline";
        document.getElementById('about').style.textDecoration = "none";


    }

    return (



        <body className="profile-page" >
            <nav className="navbar navbar-color-on-scroll navbar-transparent    fixed-top  navbar-expand-lg " color-on-scroll="100" id="sectionsNav">
                <div className="container" >


                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item mr-5" style={{ marginLeft: "-37rem" }}>
                                <a className="nav-link" href="/">
                                    <i className="material-icons">Home</i>
                                </a>
                            </li>
                            <li className="nav-item mr-5" style={{ marginLeft: "0rem" }}>
                                <a className="nav-link" href="/dashboard">
                                    <i className="material-icons">Dashboard</i>
                                </a>
                            </li>
                            <li className="nav-item mr-5" style={{ marginLeft: "0rem" }}>
                                <a className="nav-link" href="/add-portfolio/template1">
                                    <i className="material-icons">Templates</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="page-header header-filter" data-parallax="true" style={{ backgroundImage: "url('https://static.boredpanda.com/blog/wp-content/uploads/2014/10/forest-photography-fb.jpg')" }}></div>
            <div className="main main-raised">
                <div className="profile-content">
                    <div className="container" >
                        <div className="row" >
                            <div className="col-md-6 ml-auto mr-auto">
                                <div className="profile" >
                                    <div className="avatar" style={{ width: "8rem", marginTop: "2rem" }}>
                                        <img src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg" alt="not-loaded"/>
                                    </div>
                                    <div className="name">
                                        <h3 className="title mt-5">Jessica Carter</h3>
                                        <h3>Writer,Freelancer</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="description text-center">
                            <p>An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 ml-auto mr-auto">
                                <div className="profile-tabs">
                                    <ul role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#studio" role="tab" data-toggle="tab" onClick={show1}>
                                                <i className="material-icons" id="about" style={{ fontSize: "1.5rem" }}>About</i>

                                            </a>
                                        </li>
                                        <li className="nav-item" style={{ position: "absolute", top: "57%", left: "70%", }}>
                                            <a className="nav-link" href="#studio" role="tab" data-toggle="tab" onClick={show2}>
                                                <i className="material-icons" style={{ fontSize: "1.5rem" }} id="blog">Blog</i>

                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="tab-content tab-space"  >
                            <div className="tab-pane active text-center gallery" id="studio">
                                <div className="row" >
                                    <div >
                                        <h5 style={{ textAlign: "left", opacity: "0.7", }} id="heading_2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus amet dolores? Hic quis nostrum accusamus, saepe soluta necessitatibus voluptatibus, aut veritatis velit culpa asperiores qui, quo placeat doloribus sed!
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat dolore iusto error dicta ullam deserunt quas, sequi blanditiis non sapiente id rem cumque dignissimos quibusdam nostrum molestias mollitia possimus quam.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam numquam fugit excepturi magnam animi a pariatur at corrupti! Voluptates fugiat, ut enim ab perspiciatis iure fugit vitae dolorem pariatur consequatur?
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eius reiciendis? Incidunt, impedit aspernatur maxime non excepturi ullam officiis eligendi at quaerat facilis, cupiditate quasi magni, eius laudantium modi voluptates.
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod exercitationem modi vel doloremque mollitia quia rerum fuga magnam, esse, laboriosam est, quibusdam quae aperiam. Culpa maiores fugit inventore dolorum reiciendis.</h5>

                                        <h1 id="h1" style={{ position: "absolute", top: "50%", opacity: "0" }}>Blog1</h1>
                                        <h3 id="h2" style={{ position: "absolute", top: "57%", fontSize: "1rem", width: "64rem", left: "12.7%", textAlign: "left", opacity: "0" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae quo reprehenderit sed. Nulla sed animi perferendis non magnam asperiores nobis sit? Nesciunt illo excepturi quis deserunt eos nisi aperiam quod.</h3>
                                        <h1 id="h3" style={{ position: "absolute", top: "68%", opacity: "0" }}>Blog2</h1>
                                        <h3 id="h4" style={{ position: "absolute", top: "75%", fontSize: "1rem", width: "64rem", left: "12.7%", textAlign: "left", opacity: "0" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis consectetur tempora eos debitis iure id animi molestiae minima nulla eveniet omnis dolores quisquam illum quia fugit, assumenda autem dolore?</h3>
                                        <h1 id="h5" style={{ position: "absolute", top: "83%", opacity: "0" }}>Blog3</h1>
                                        <h3 id="h6" style={{ position: "absolute", top: "90%", fontSize: "1rem", width: "64rem", left: "12.7%", textAlign: "left", opacity: "0" }} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nam aperiam ad numquam quasi quam, doloremque exercitationem? Officia debitis, sit quam voluptatum, nemo eum facere quasi nostrum cupiditate delectus eaque!</h3>


                                    </div>


                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </div>

            <footer className="footer text-center ">
                <p>Copyrights @2022 Jessica Carter</p>
            </footer>

            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>
            <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>




        </body>


    );
}

export default BlogTemplate;