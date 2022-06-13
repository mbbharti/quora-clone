import React from 'react';
import "../css/WidgetOptions.css";
import mobile from "../images/smartPhone.png";
import quotation from "../images/quotation.png";
import art from "../images/art.jpg";
import friedrich from "../images/friedrich.jpg";
import stock from "../images/stock.jpg";
import architecture from "../images/architecture.jpg";

export const WidgetOptions = () => {
  return (
    <div className='widgetoptions'>
        <div className='widget_content'>
            <img src = {mobile}
            alt ="mobile image" />
            
            <div className='widget_contentTitle'>
                <h5>Mobile App Programmer</h5>
                <p>The Best mobile App Development Company</p>
            </div>
        </div>

        
        <div className='widget_content'>
            <img src = {quotation}
            alt ="quotation image" />
            
            <div className='widget_contentTitle'>
                <h5>Quota of Quotes</h5>
                <p>Daily dosages of unforgatable lines from...</p>
            </div>
        </div>

        <div className='widget_content'>
            <img src = {art}
            alt ="art image" />
            
            <div className='widget_contentTitle'>
                <h5>Art & Artist</h5>
                <p>A space related to creating practicing an...</p>
            </div>
        </div>

        <div className='widget_content'>
            <img src = {friedrich}
            alt ="friedrich image" />
            
            <div className='widget_contentTitle'>
                <h5>friedrich Nietche</h5>
                <p>A space dedicated to great work of friedrich...</p>
            </div>
        </div>

        <div className='widget_content'>
            <img src = {stock}
            alt ="stock image" />
            
            <div className='widget_contentTitle'>
                <h5>Stock Market Strategies</h5>
                <p>Everything About Inversting in Stocks...</p>
            </div>
        </div>

        <div className='widget_content'>
            <img src = {architecture}
            alt ="architecture image" />
            
            <div className='widget_contentTitle'>
                <h5>Architecture World</h5>
                <p>Everything About Civil Architecture...</p>
            </div>
        </div>


    </div>
  )
}

export default WidgetOptions;
