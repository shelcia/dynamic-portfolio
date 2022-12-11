import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './blog.css'
import { useState } from 'react';
// import './blog.js'
// import blog from './blog.js'



export default function BlogTemplate() {
  // function blog(){
  //   
  // }

  // const [showtab,setshowtab]=useState(1)
 
  function handletab() {

    const blog_content_2 = document.getElementById('blog-content-2')
    const blog_content = document.getElementById('blog-content')
    const blog_content_3 = document.getElementById('blog-content-3')
    const blog_content_4 = document.getElementById('blog-content-4')
    const btn_1=document.getElementById('u-2')
    const btn_2=document.getElementById('u-1')

  
    blog_content_2.style.opacity = '0';
    blog_content.style.opacity = '1';
    blog_content_3.style.opacity = '1';
    blog_content_4.style.opacity = '1';
    btn_2.style.textDecoration = 'none';
    btn_1.style.textDecoration='underline';

  }

  function handletab1() {
    const blog_content_2 = document.getElementById('blog-content-2')
    const blog_content = document.getElementById('blog-content')
    const blog_content_3 = document.getElementById('blog-content-3')
    const blog_content_4 = document.getElementById('blog-content-4')
    const btn_1=document.getElementById('u-2')
    const btn_2=document.getElementById('u-1')
  
    blog_content_2.style.opacity='1';
    blog_content.style.opacity = '0';
    blog_content_3.style.opacity = '0';
    blog_content_4.style.opacity = '0';
    btn_1.style.textDecoration = 'none';
    btn_2.style.textDecoration='underline';

   

  }

  return (
    <div className="vh-100 main" style={{ backgroundColor: '#eee' }}>
      <img className='image' src="https://media.istockphoto.com/id/1082411378/photo/magical-fairytale-forest.jpg?s=612x612&w=0&k=20&c=3iw53YdeeFEqRuxcUL0UCQZUMJ3e2IRtUfvgSjAysjQ=" alt="" />
      <MDBContainer className=" py-5 h-100 card contain">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4" className='pic'>

            <MDBCardBody className="text-center ">
              <div className="mt-3 mb-4">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                  className="rounded-circle" fluid style={{ width: '100px' }} />
              </div>
              <MDBTypography tag="h4">Shelcia</MDBTypography>

              <MDBTypography tag="h5" style={{ opacity: 0.6 }}>Freelancer,WebDeveloper</MDBTypography>
              <MDBTypography tag="h5" style={{ opacity: 0.8 }}> <button onClick={() => handletab1()} className="btn-1"> <u id='u-1' className='u-1'>About</u> </button> </MDBTypography>
              <MDBTypography tag="h5" style={{ opacity: 0.8 }}> <button onClick={() => handletab()} className="btn-2" > <u className='u-2'id='u-2' >Blog</u> </button></MDBTypography>

              <div className='py-2'></div>


              <div className="d-flex justify-content-between text-center mt-5 mb-2 ">
                <div id='blog-content'>
                  <MDBCardText className="mr-5 h5 blog-1">Blog1</MDBCardText>
                  <MDBCardText className="small text-muted mb-0 blog_1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro neque repellat incidunt dicta, corrupti officiis sit. Quibusdam quasi sapiente quas. Perferendis amet illo sapiente obcaecati saepe excepturi aperiam quod possimus.</MDBCardText>
                </div>
                <div className="px-3" id='blog-content-3'>
                  <MDBCardText className="mb-1 h5 blog-2">Blog2</MDBCardText>
                  <MDBCardText className="small text-muted mb-0 blog_2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt hic maxime sapiente exercitationem fugit ad possimus neque itaque tempora commodi, voluptatem voluptatum dolore, est quia dolores nemo, delectus excepturi in.</MDBCardText>
                </div>
                <div>
                  <MDBCardText className="mb-1 h5 blog-3" id='blog-content-4'>Blog3</MDBCardText>
                  <MDBCardText className="small text-muted mb-0 blog_3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error architecto nemo suscipit, quod earum dolorem, dolorum vero quaerat ab laboriosam et quas quidem vel, maxime sit ad id pariatur? Quasi.</MDBCardText>
                </div>
              </div>
              <div className='py-2 content-2' ></div>


              <div className="d-flex justify-content-between text-center mt-5 mb-2 active">
                <div>

                  <MDBCardText className="small text-muted mb-0 blog_4" id="blog-content-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem beatae neque repellendus nulla illo deserunt atque dolor consequuntur rem itaque. Pariatur quisquam, consequatur sint non nisi optio eos sed porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae consequatur fugit esse, natus pariatur numquam iusto aspernatur commodi tempora, amet id obcaecati placeat, odit aperiam rem? Esse fugit nulla molestiae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eaque impedit, tempore totam excepturi dignissimos eos. Sapiente, ad dolorum. Architecto suscipit adipisci facilis expedita earum placeat voluptas reprehenderit? Consequatur, provident! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem delectus expedita praesentium, sed quidem veniam. Iste iure ipsa voluptates nobis aliquid, laboriosam atque dignissimos. Ea illo ipsum commodi magnam doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut corrupti ipsum assumenda voluptatum molestias impedit minus, quod sed quidem eos vitae distinctio blanditiis quas fuga libero nostrum laudantium nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo recusandae tenetur et fuga molestiae officia impedit mollitia magnam iste totam, voluptates, neque vitae enim aut sed, itaque cum saepe delectus!</MDBCardText>
                </div>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBContainer>



    </div>
  );
}