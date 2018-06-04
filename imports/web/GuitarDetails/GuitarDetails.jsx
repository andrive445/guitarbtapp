import React, { Component } from 'react';
import AccessoriesBox from '/imports/web/Accessories/AccessoriesBox.jsx';

export default class GuitarDetails extends Component {
    render(){
        return(
            <div className="guitar-details-container container-fluid">
                <h1 className="details text-center">
                    Guitar 120XD Guitar Details
                </h1>
                {/* <h4 className="details-para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sapiente eius deserunt amet, quam sint autem cumque maiores dolor repellendus reprehenderit alias accusantium, asperiores aspernatur a aliquid numquam blanditiis est sit similique. Nulla, repellendus rem. Atque quis, earum praesentium in inventore ipsum! Sapiente consectetur adipisci sed iusto dolores, debitis vel!
                </h4> */}
                <div className="row guitar-detail-row">
                    <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 guitar-detail-col">
                        <div className="guitar-detail-box1">
                            <div className="guitar-detail-img">
                                <img src="/images/guitars/demo1.png" alt="" className="guitar-detail-imgin"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 guitar-detail-col">
                        <div className="guitar-detail-box2">
                            <div className="guitar-d-con">
                                <div className="guitar-d-name">Guitar Name: Guitar 120XD</div>
                                <div className="guitar-d-brand">Guitar Brand: Allen Solly</div>
                                <div className="guitar-d-type">Guitar Type: Electric</div>
                                <div className="guitar-d-numberStr">Number of Strings: 12</div>
                                <div className="guitar-d-price">Price: Rs. 3000</div>
                                <div className="guitar-d-serialNo">Serial Number: AHFG56THO</div>
                                <div className="guitar-d-availabilty">Availability: <span className="guitar-ava-span">Available</span></div>
                                <div className="guitar-d-buy">BUY NOW</div>
                            </div>
                            <div className="guitar-d-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo esse quos omnis at impedit nihil repudiandae, nulla unde consequuntur? Voluptate optio earum et dolorum blanditiis unde, voluptatibus deleniti temporibus eaque error autem tempora, neque repudiandae voluptatum quas! Laborum atque quas, dicta ipsam exercitationem corrupti quia ut perspiciatis ipsum, in tempore nostrum provident illum? Debitis sit, delectus ipsa in mollitia assumenda praesentium at, blanditiis a quo tempora corrupti? Repellendus in suscipit illum amet eos recusandae, voluptates est dolore, nihil, id ex laudantium nesciunt architecto fuga. Nostrum nam eius illo amet recusandae ducimus nihil aliquam odio dolor nisi, voluptatem assumenda ipsa odit, nobis dicta provident ipsam deleniti illum nemo, voluptatibus est adipisci dolore consectetur quas. Temporibus id non, esse odio aspernatur molestiae nihil illum itaque deserunt asperiores nam ratione, veritatis ad, perferendis quibusdam dolorem modi officiis alias officia hic ab consectetur. Harum libero vero et ullam obcaecati cupiditate officiis rerum animi error.</div>
                        </div>
                    </div>
                </div>
                <div className="row guitar-detail-row">
                    <div className="col-lg-12">
                        <h4 className="text-center guitar-d-relatedaccr">BUY Related Accessories with Guitar</h4>
                    </div>
                </div>
                <AccessoriesBox />
                
            </div>    
        );
    }
}