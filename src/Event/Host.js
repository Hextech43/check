import React,{ useState, useEffect} from 'react'
import styled from "styled-components"

const Host = () => {
    const [day1, setDay1] = useState(false)
    const [day2, setDay2] = useState(false)
    const [day3, setDay3] = useState(false)

    const handleDAy1 =()=>{
        setDay1(true)
        setDay2(false)
        setDay3(false)

    }
    const handleDAy2 =()=>{
        setDay2(true)
        setDay1(false)
        setDay3(false)

    }
    const handleDAy3 =()=>{
        setDay3(true)
        setDay2(false)
        setDay1(false)

    }
  return (
   <Container id="speaker">
          <Hosted>Meet Our Speakers</Hosted>
       <Wrapper>
        
<Dayholder>
    <Cards onClick={handleDAy1}>
        <span>Day 1</span>
        <span>25th May, 2022</span>
    </Cards>
    <Cards onClick={handleDAy2}>
        <span>Day 2</span>
        <span>25th May, 2022</span>
    </Cards>
    <Cards onClick={handleDAy3}>
        <span>Day 3</span>
        <span>25th May, 2022</span>
    </Cards>
</Dayholder>
{
    day1?(
        <>
         <Speaker>
           <Listed>
               <Pictures src="/images/frank.jpg"/>
               <About>
                   <Name>
                     
                       <span>Speaker1: </span>
                      <p> Frank Agin</p> 
                    
                   </Name>
                   <a>Topic: Networking - The link to Global Relevance </a>
                  <p style={{fontWeight:"bold"}}> Time: 6:10 pm - 6:40 pm</p>
                   <Note> president of AmSpirit Business. He is also the host of the Networking Rx podcast, a weekly short-form podcast 
                       with insights and interviews related to better business relationships.
                        </Note>
               </About>

           </Listed>
   <Listed>
               <Pictures src="/images/omale.jpg"/>
               <About>
                   <Name>
                     
                       <span>PANELIST 1:  </span>
                      <p> EMMANUEL OMALE</p> 
                    
                   </Name>
                   <a>Topic: Networking - The link to Global Relevance </a>
                  <p style={{fontWeight:"bold"}}> Time: 6:10 pm - 6:40 pm</p>
                   <Note> Emmanuel Omale is a thought and dynamic leader and strategist.
                   He strongly believes humans can live to the max of their potential by becoming good learners.
He is a growth and plan strategist, entrepreneur, public speaker,
    and personal development advocate. He calls himself THE LIGHT and is a good Christian.

                        </Note>
               </About>

           </Listed>
         
           <Listed>
               <Pictures src="/images/akinde.jpg"/>
               <About>
                   <Name>
                     
                       <span>SPEAKER 2: </span>
                      <p>OLAMIDE AKINDE</p> 
                  
                   </Name>
                   <a>    TOPIC: The platform to maximize for global relevance.</a>
                  <div>Time: 6:50 pm - 7:20 pm</div>
                   <Note> Olamide Akinde is an SEO content writer, social media manager, copywriter,
                        and website developer. She has gained visibility for her brand and helps businesses build online authority.
 </Note>
               </About>

           </Listed>
           <Listed>
               <Pictures src="/images/mary.jpg"/>
               <About>
                   <Name>
                     
                       <span>PANELIST2: </span>
                      <p>MARY SABASTINE</p> 
                    
                   </Name>
                   {/* <a>    TOPIC: The platform to maximize for global relevance.</a>
                  <div>Time: 6:10 pm - 6:40 pm</div> */}
                   <Note>Mary Sabastine is a certified LinkedIn coach who has trained over 100 persons 
                       in both paid and free classes on how to optimize their LinkedIn for profitability.
                       She is a public speaker, personal branding expert, content writer and affiliate marketer. 
                     </Note>
               </About>

           </Listed>
           <Listed>
               <Pictures src="/images/awa.jpg"/>
               <About>
                   <Name>
                     
                       <span>SPEAKER 3:  </span>
                      <p>AWA NDUKWE</p> 
                    
                   </Name>
                   <a>    Topic: Positioning for Global Recognition </a>
                  <div>Time: 7: 20 pm to 7: 50 pm</div> 
                   <Note>
Awa k. Ndukwe is the Brand Strategist at Optivity 
Now and loves helping people discover themselves,
 and actualize their dreams. Awa k. Ndukwe is also a brand coach who has created brand
  leaders who are more prepared to lead their brands to success.

                     </Note>
               </About>

           </Listed>
  <Listed>
               <Pictures src="/images/batly.jpg"/>
               <About>
                   <Name>
                     
                       <span>PANELIST 3:  </span>
                      <p> THE LADY CALLED BATLY</p> 
                    
                   </Name>
                   {/* <a>Topic: Networking - The link to Global Relevance </a>
                  <p style={{fontWeight:"bold"}}> Time: 6:10 pm - 6:40 pm</p> */}
                   <Note> </Note>
               </About>

           </Listed>
        
           <Listed>
               <Pictures src="/images/goodness.jpg"/>
               <About>
                   <Name>
                     
                       <span>SPEAKER 4:
 </span>
                      <p> GOODNESS SOMTOCHUKWU</p> 
                    
                   </Name>
                   <a>   Topic: Hacking Skills for Global Opportunities</a>
                  <div>Time: 7:30 - 8:00</div>
                   <Note>Mary Sabastine is a certified LinkedIn coach who has trained over 100 persons 
                       in both paid and free classes on how to optimize their LinkedIn for profitability.
                       She is a public speaker, personal branding expert, content writer and affiliate marketer. 
                     </Note>
               </About>

           </Listed>
           <Listed>
               <Pictures src="/images/lanu.jpg"/>
               <About>
                   <Name>
                     
                       <span>PANELIST4:
 </span>
                      <p> GOODNEWS LANU AYANKOYA </p> 
                    
                   </Name>
                   {/* <a>   Topic: Hacking Skills for Global Opportunities</a>
                  <div>Time: 7:30 - 8:00</div> */}
                   <Note>Goodnews Lanu Ayankoya, popularly known as Goody King, 
                       is a medical student who evolved into a digital entrepreneur. 
    Goodnews Lanu is a highly creative and motivated young lady
         with content writing expertise

                     </Note>
               </About>

           </Listed>
           </Speaker>

  
       
        </>
    ):(
        <>
        {
            day2 ?(
<Speaker>
           <Listed>
               <Pictures src="/images/peter.jpg"/>
               <About>
                   <Name>
                     
                       <span>SPEAKER 1:  </span>
                      <p>PETER EBUKA</p> 
                    
                   </Name>
                 <a>  Topic: Positioning for Global Recognition </a>
                  <p style={{fontWeight:"bold"}}> Time: 6:10 pm to 6:40 pm</p>
                   <Note> 
Peter  Ebuka Agbo is the Founder 
& Recruitment Lead at HireRite Services, 
an outsourcing company. He's also the Social Media Strategist at Nobellum, 
an ecosystem in Toronto dedicated to carving out a 
space in the technology industry for Blacks.

 </Note>
               </About>

           </Listed>
           <Listed>
           <Pictures src="/images/ijeoma.jpg"/>
               <About>
                   <Name>
                     
                       <span>HOST AND PANELIST 1:  </span>
                      <p>ORITSELAJU IJEOMA</p> 
                    
                   </Name>
                 
                   <Note>Oritselaju Ejuomah is a graduate of Theatre Arts at the University of Benin. 
                       Through exploring theatre genres, she brought out the creativity in her.
        One such creativity is her expertise in content writng; she knows how to serve her audience
    with value and propel them to take action for their growth. </Note>
               </About>

           </Listed>
           <Listed>
           <Pictures src="/images/tonia.jpg"/>
               <About>
                   <Name>
                     
                       <span>SPEAKER 2:   </span>
                      <p> TONIA VINCENT </p> 
                    
                   </Name>
                   <a>   TOPIC: Becoming a global brand Influencer </a>
                  <p style={{fontWeight:"bold"}}> TIME: 6:50 pm - 7:20 pm</p>
                


                
                   <Note>Tonia Vincent is a LinkedIn brand influencer and social media manager. 
                       She has influenced many brands and helped them become visible and globally consistent.
As a social media manager, she maintains, monitors and moderates every aspect of 
seeing that your social media platforms run smoothly. 

</Note>
               </About>

           </Listed>
           <Listed>
           <Pictures src="/images/oke.jpg"/>
               <About>
                   <Name>
                     
                       <span>PANELIST 2: 
   </span>
                      <p>OLUWADAMILOLA OKE </p> 
                    
                   </Name>
                   {/* <a>   TOPIC: Becoming a global brand Influencer </a>
                  <p style={{fontWeight:"bold"}}> TIME: 6:50 pm - 7:20 pm</p> */}
                


                
                   <Note>Oluwadamilola Elizabeth Oke  is the brand ambassador 
                       for salesruby and a brand marketer
                        for the Jaybotton artistry.
Oluwadamilola is a multipotentialite. She is a content writer, a fashion model, 
and a gospel artist with the stage name "Dunnisings." 


</Note>
               </About>

           </Listed>
           <Listed>
           <Pictures src="/images/chika.jpg"/>
               <About>
                   <Name>
                     
                       <span>SPEAKER 3: 
   </span>
                      <p>CHIKAODI EMMANUEL </p> 
                    
                   </Name>
                   <a>  TOPIC: Becoming a Global Brand; 7 Proven Ways.</a>
                  <p style={{fontWeight:"bold"}}> TIME: 7:30 pm - 8:00 pm</p>
                


                
                   <Note>Chikaodi Emmanuel is a Certified Sales and Customer Service Professional with 
                       extensive experience in Real Estate, Modern technology, and the Automobile Sector.
Chikaodi Emmanuel is skilled and empathetic in assisting Business Owners and 
Professionals who are scared of purchasing properties; he recommends Authentic, Government Verified, 
and comfortable Homes with high returns on investment to property buyers.
." 


</Note>
               </About>

           </Listed>
           <Listed>
           <Pictures src="/images/ajayi.jpg"/>
               <About>
                   <Name>
                     
                       <span>PANELIST 3:    </span>
                      <p>OLADOTUN AJAYI  </p> 
                    
                   </Name>
                   {/* <a>  TOPIC: Becoming a Global Brand; 7 Proven Ways.</a>
                  <p style={{fontWeight:"bold"}}> TIME: 7:30 pm - 8:00 pm</p> */}
                


                
                   <Note>Oladotun is a founding member of Students on Linkedin, 
                       a student-focused online community to help students leverage LinkedIn for networking,
                        upscaling, and unlocking their potential. 
Oladotun is also the Global Youth Ambassador 
for One Active Supporter and the campus ambassador.



</Note>
               </About>

           </Listed>
           </Speaker>
            ):(
               <>
                

 <Speaker>
           <Listed>
           <Pictures src="/images/nduka.jpg"/>
               <About>
                   <Name>
                     
                       <span>SPEAKER 1:  </span>
                      <p>EMMANUEL NDUKA</p> 
                  
                   </Name>
                   <Timehold>
                   <a>TOPIC: Choosing to gain global relevance</a>
                  <p style={{fontWeight:"bold"}}> Time:  8:00pm  - 8:30pm</p>
                  </Timehold>
                   <Note>Emmanuel Nduka is the Most Influential Young personality on Linkedin.
                        He is a Chemical engineering student and the Co/Founder of Hemm Africa.
                        He is co-authoring a book that will transform lives.
Emmanuel Nduka has gained the attention of notable personalities like 
Tony Elumelu and was crowned the 30 Top Voices in Tech by Engati
</Note>
               </About>

           </Listed>
           <Listed>
           <Pictures src="/images/denu.jpg"/>
               <About>
                   <Name>
                     
                       <span> PANELIST 1:  </span>
                      <p>DENU VOUR BON </p> 
                    
                   </Name>
                   {/* <Timehold>
                       <span>PANELIST 1:  </span>
                      <p></p> 
                      </Timehold> */}
                   <Note> Denu Vour Bon, also known as the viral author, is the founder of GoLoko Diaries, 
                       a book publishing company with over 2000 followership and over 200 team members.
Denu Bon was recently recognized as one of the Top 50 young African influencers,
 his mission is not to only help people publish their books but to also achieve their dreams.
</Note>
               </About>

           </Listed>
           <Listed>
           <Pictures src="/images/philip.jpg"/>
               <About>
                   <Name>
                     
                       <span>SPEAKER 2: </span>
                      <p>PHILIP OLADEJO </p> 
                    
                   </Name>
                   <Timehold>
                       <a> Topic: How to go about the pursuit of Greatness. What is required? </a>
                      <p style={{fontWeight:"bold"}}>Time: 6:50 pm to 7:30 pm</p> 
                      </Timehold>
                    <Note> Philip Oladejo is the Founder of the Global Author's Club and Awards, 
an organization that organizes and helps entrepreneurs add a Global Award 
to their authority and become a Global winner. 
He is an Inspirational Leader, Business and Transformational Coach, Health, 
Safety, and Environmental Management Consultant, and Seasoned Speaker </Note> 
               </About>

           </Listed>

 <Listed>
           <Pictures src="/images/adedoyin.jpg"/>
               <About>
                   <Name>
                     
                       <span>CHIEF HOST AND PANELIST 2: </span>
                      <p> ADEDOYIN OLUYEMI </p> 
                    
                   </Name>
                  
                    <Note>Adedoyin Oluyemi is an Inimitable Content Writer, an Excellent Public Speaker,
                        Quintessential Event Compere, and Educator who loves to refer to herself 
                        as "The lady who loves to dare!" She is currently the Digital Media Strategist
                    at Platinum & Taylor Hill LP and Public Relations
                    Executive at the Society of Cosmetic Scientists, Nigeria. </Note> 
               </About>

           </Listed>

          
           <Listed>
           <Pictures src="/images/claire.png"/>
               <About>
                   <Name>
                     
                       <span>SPEAKER 4:  </span>
                      <p>OKEKE VIVIAN CLAIRE</p> 
                    
                   </Name>
                   <Timehold>
                       <a> TOPIC: The Wrap on gaining global relevance </a>
                      <p style={{fontWeight:"bold"}}>Time:7:40 pm to 8:30 pm</p> 
                      </Timehold>
                   <Note> Vivian Claire Okeke is the Founder of Global Transformation Conference, 
                       an organization with the vision to transform, impact and help individuals break limits
                        and reach their peak.Vivian Claire is also the Co-Founder of Black Owned 
                        Digital. She is a smart marketer who believes in human marketing, 
                        adding humanity to marketing while driving home ROIs. 
 </Note>
               </About>

           </Listed>

 <Listed>
           <Pictures src="/images/abiye.jpg"/>
               <About>
                   <Name>
                     
                       <span>LEADING HOST:  </span>
                      <p> ABIYE ABERE</p> 
                    
                   </Name>
                
                   <Note> Abiye Abere is a first class graduate civil engineer,
                       professional master of ceremonies, public speaker, coach, on-air personality 
                       and creative content writer.
He is also an active member of the world's leading professional 
network of communicators, Toastmasters International.

 </Note>
               </About>

           </Listed>
         

         
           </Speaker>

                            
               </>
            )
        }
        </>
    )
}

       </Wrapper>

   </Container>
  )
}

export default Host
const Timehold = styled.div`

width:100% ;
`
const Speaker = styled.div`
width:100% ;
`
const Cards = styled.div`
margin:20px 0 ;
height:100px ;
width: 200px;
align-items:center ;
display: flex;
justify-content:center;
flex-direction: column;
cursor: pointer;
background: white;
margin-right:20px ;

transform: scale(1);

&:hover{
    color:white ;
    background: blue;  transform: scale(1.009);
    transition: all 400ms;
}
@media screen and (max-width: 769px) {
/* width:350px ; */
width:100%;

    margin:5px 0;
}
`
const Dayholder = styled.div`
display: flex ;
@media screen and (max-width: 769px) {
    width:100% ;
    align-items:center ;
    flex-direction:column ;
    display:flex;

}
`;
const About = styled.div`
/* color: white; */
width:75% ;
height:60% ;
align-items:center ;
a{
    font-weight: bold ;

}
@media screen and (max-width: 769px) {
    width:90% ;
}

`
const Hosted = styled.div`
width:100% ;
padding-top:30px ;
justify-content:center;
display: flex;

font-weight: bold;
  font-size: 30px;
  


  margin-bottom:30px;
`
const Name = styled.div`
display: flex ;
height:100% ;
width:100% ;
@media screen and (max-width: 769px) {
    width:90% ;
    align-items:center ;
}


align-items:center ;
span{
    margin-right:10px ;
   
}
p{
    color:#EA0763;
    text-transform: uppercase;
}
div{
    font-weight:bold ;
}

`
const Note =styled.div`
 margin-top:10px ;
font-size:14px ;
padding:0px 10px ;
padding-bottom:20px ;
@media screen and (max-width: 769px) {
    width:100% ;
}
`
const Pictures = styled.img`
height:120px ;
width:120px ;
/* object-fit:contain ; */
border-radius:60px;
/* background:yellow ; */
margin: 0 10px;
`
const Listed = styled.div`
margin:10px 0 ;
display: flex ;
height:70% ;
width:100% ;
/* padding:10px 0; */
/* background:blue ; */
align-items: center;
justify-content: space-between;
background-color:white;
@media screen and (max-width: 769px) {
    flex-direction:column ;
    /* align-items:none ; */
    justify-content:none;
    padding:10px 0 ;
}
`
const Wrapper = styled.div`
padding-top:10px;
height:100% ;
width: 70%;
display: flex;
flex-direction:column ;
align-items:center ;
justify-content: center;
@media screen and (max-width: 769px) {
flex-direction:column ;
width: 90%;

/* align-items:center; */
}

`
const Container = styled.div`
position:relative ;
display: flex;
flex-direction:column;
padding-top:70px ;
align-items:center ;
/* justify-content: center; */
height:100%;
min-height:100vh ;
padding-bottom:30px ;
background-color:rgb(211,211,211,0.9);
/* background-color:red ; */
width:100%;
`


