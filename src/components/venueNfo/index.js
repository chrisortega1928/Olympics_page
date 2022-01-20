import React from 'react';
import Zoom from 'react-reveal/Zoom'; // Content should go here.
// the import below is to get the named images from their corresponding folder.
import brad from '../../resources/images/Players/brad.jpg' 
import chloe from '../../resources/images/Players/chloe.jpg'
import hanyu from '../../resources/images/Players/hanyu.jpg'
import mikaela from '../../resources/images/Players/mikaela.jpg'
import suzanne from '../../resources/images/Players/suzanne.jpg'
const VunueNfo = () => {
    return (
        <div className="bck_black">
            <h1>SOME OF THE PLAYERS</h1>
            <div className="center_wrapper"> // to put the header at the center.
                <div className="vn_wrapper">
                    <Zoom duration={500}>  //zooming animation that reveals text inside the tag
                        <div className="vn_item">
                            <div className="vn_outer"> 
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_brown"></div>
                                    <img src= {brad} alt="" className="Players_pic" // to fecth the image named brad in the folder called Players and positioning here.
                                        style={{width:"100%", // width size
                                        height: "auto", // height size
                                        textAlign: "center"}}/> 
                                    <div className="vn_title"> // title of the picture.
                                        Brad Gushue 
                                    </div>
                                    <div className="vn_desc"> // to add a description 
                                        Curling Player
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom duration={500} delay={500}> //zooming animation that reveals text inside the tag
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_brown"></div>
                                    <img src= {chloe} alt="" className="Players_pic" // to fecth the image named brad in the folder called Players and positioning here.
                                        style={{width:"100%", // width size
                                        height: "auto", // height size
                                        textAlign: "center"}}/>
                                    <div className="vn_title"> // title of the picture.
                                        Chloe Kim
                                    </div>
                                    <div className="vn_desc"> // to add a description 
                                       Snowboarder
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom duration={500}> //zooming animation that reveals text inside the tag
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_brown"></div>
                                    <img src= {hanyu} alt="" className="Players_pic" // to fecth the image named brad in the folder called Players and positioning here.
                                        style={{width:"100%", // width size of the picture
                                        height: "auto", // height size of the picture // textalign is to make the text be centered.
                                        textAlign: "center"}}/>
                                    <div className="vn_title"> // title of the picture.
                                    Hanyu Yuzuru
                                    </div>
                                    <div className="vn_desc"> // to add a description .
                                        Skater
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom duration={500}> //zooming animation that reveals text inside the tag
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_brown"></div>
                                    <img src= {mikaela} alt="" className="Players_pic" // to fecth the image named brad in the folder called Players and positioning here.
                                        style={{width:"100%", // width size of the picture
                                        height: "auto", // height size of the picture // textalign is to make the text be centered.
                                        textAlign: "center"}}/>          
                                    <div className="vn_title"> // title of the picture.
                                    Mikaela Shiffrin
                                    </div>
                                    <div className="vn_desc"> // to add a description .
                                        Alpine Skier
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Zoom>
                        <Zoom duration={500}> //zooming animation that reveals text inside the tag
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_brown"></div>
                                    <img src= {suzanne} alt="" className="Players_pic"  // to fecth the image named brad in the folder called Players and positioning here.
                                        style={{width:"100%", // width size of the picture
                                        height: "auto", // height size of the picture // textalign is to make the text be centered.
                                        textAlign: "center"}}/> 
                                    <div className="vn_title"> // title of the picture.
                                    suzanne Schulting
                                    </div>
                                    <div className="vn_desc"> // to add a description .
                                        Speed Skater
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Zoom>
                </div>
            </div>
        </div>
    );
};
export default VunueNfo;
