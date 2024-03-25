import './App.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import { BsArrowReturnRight } from "react-icons/bs";
import { IoIosArrowDropupCircle } from "react-icons/io";
import {  GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";

import { useState } from 'react';
import spark from './assets/sparkler.png'

function App() {

  const [isCompleteScreen, setIscompleteScreen] = useState(true)
  const [isScreen, setIsScreen] = useState(true)
  const [isExpanded, setIsExpanded] = useState(true)


  return (
    <div className="flex">
        <aside className='aside'></aside>
          <div className='container'>
            {isCompleteScreen ?
            <div className='mainBox'>
              <div className='header'>
                <div> STEP 1/3 </div>
                <div>4 Prompts | 5 mins </div>         
              </div>
              <div className='content'>
                <div className='cost0'>
                  <div className='cost1'>Cost Identification</div>
                  <div className='cost2'>Identify and categorize the various costs influencing margins.</div>
                </div>
                <button type='button' class='btn' onClick={()=>setIscompleteScreen (false)}>
                  <div className='get'>Get Started</div>
                  <MdKeyboardArrowRight className='arrow' />
                </button>
              </div>
            </div>
            :

            <div className='mainBox1'>
              {isScreen ?
             <div className='div1'>
              <div className='div2'>
                <div className='div3'>
                  <div className='header1'>Step 1</div>
                <IoIosArrowDropupCircle className='upArrow' onClick={()=>setIscompleteScreen(true)} />
                </div>
                <div className='costA'>
                    Cost Identification
                </div>
                <div className='viewmore'>
                  <div className='more'>
                  Identify and categorize the various costs influencing margins. Costs are usually categorized as variable costs (which increase directly with an increase in sales or revenue – for example raw material costs for production), semi-variable costs (which increase with sales too, but not as linearly. For example – manpower costs for some services heavy business) and fixed costs (which are not linked to the volume of products/sales/revenue directly. For example – headquarter administration costs).
                  </div>
                </div>
              </div>
              <div className='div4'>
                <div className='quest'>
                  <div className='question'>Question 1 out of 3</div>
                  <button type='button' onClick={()=>setIsScreen(false)} className='plus'><FiPlus className='plus'/></button>

                </div>
                <div className='question1'>
                What are the primary components of variable & semi-variable costs impacting gross margins?
                </div>
              </div>
             </div>
             :
             <div className='div1'>
             <div className='div2'>
               <div className='div3'>
                 <div className='header1'>Step 1</div>
                 <IoIosArrowDropupCircle className='upArrow' />
               </div>
               <div className='costA'>
                   Cost Identification
               </div>
               <div className='viewmore'>
                 <div className='more'>
                 Identify and categorize the various costs influencing margins. Costs are usually categorized as variable costs (which increase directly with an increase in sales or revenue – for example raw material costs for production), semi-variable costs (which increase with sales too, but not as linearly. For example – manpower costs for some services heavy business) and fixed costs (which are not linked to the volume of products/sales/revenue directly. For example – headquarter administration costs).
                 </div>
               </div>
             </div>
             <div className='div4'>
               <div className='quest'>
                 <div className='question'>Question 1 out of 3</div>
                 <button type='button' onClick={()=>setIsScreen(true)} className='plus'><FiMinus className='plus'/></button>

               </div>
               <div className='question1'>
               What are the primary components of variable & semi-variable costs impacting gross margins?
               </div>
               {isExpanded ? 
               <div className='flex'>
                 <div className='littleBlue'>
                    <div className='addHover'>
                      <div className='need'>
                      <BsArrowReturnRight className='returnArrow'/>
                      Need more clarification on the section?
                      </div>
                      <GoPlusCircle className='circle' onClick={()=>setIsExpanded(false)}/>

                    </div>
                 </div>
                 <div className='littleBlue2'>
                 <div className='addHover'>
                 <div className='need'>
                 <img src={spark} alt='stars'  className='spark'/>
                    Need more clarification on the section?
                  </div>
                  <GoPlusCircle className='circle' onClick={()=>setIsExpanded(false)}/>
                  </div>
                 </div>
               </div>
               : 
               <div className='flex'>
               <div className='bigBlue'>
                  <div className='addHover'>
                    <div className='need'>
                    <BsArrowReturnRight className='returnArrow'/>
                    Need more clarification on the section?
                    </div>
                    <FiMinusCircle className='circle' onClick={()=>setIsExpanded(true)}/>

                  </div>
               </div>
               <div className='bigBlue2'>
               <div className='addHover'>
               <div className='need'>
               <img src={spark} alt='stars'  className='spark'/>
                  Need more clarification on the section?
                </div>
                <FiMinusCircle className='circle' onClick={()=>setIsExpanded(true)}/>
                </div>
               </div>
             </div>}

             </div>
            </div>
            }
           </div> 
}

           

          </div>
        </div>
      
  );
  }

export default App;
