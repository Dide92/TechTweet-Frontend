import React from 'react';
import { Link } from 'react-router-dom';


function News() {
    return(
    <div>
      <h1 className='tweets'>POP UP TECH NEWS</h1>
    
      <section className='news'>
       
      <div className="container1" >
          <div className='card'>
            <div className='front1'></div>
            <div className='back'>
            <h1>Apple iOS</h1>
            <p style={{paddingRight:'1rem', paddingLeft:'1rem'}}>Apple announces new privacy features: During its annual Worldwide Developers Conference (WWDC), Apple unveiled a range of new privacy features that will be introduced in the upcoming iOS 15 operating system. This ensures greater privacy for users and reduces the amount of data shared with advertisers. Additionally, Apple introduced iCloud+, an upgraded subscription service that includes enhanced privacy features such as Private Relay, which encrypts users' internet traffic and makes it more difficult for third parties to track their browsing activity. </p>
            </div>
          </div>
      </div>
      <div className="container2">
          <div className='card'>
            <div className='front2'></div>
            <div className='back'>
            <h1>Tesla</h1>
            <p style={{paddingRight:'1rem', paddingLeft:'1rem'}}>Tesla's Autopilot upgrade: Tesla has rolled out a significant software update for its Autopilot system, introducing advanced capabilities that further enhance the vehicle's autonomous driving capabilities. With the update, Tesla vehicles can now recognize and respond to traffic lights and stop signs, enabling a more seamless and safer driving experience. The Autopilot upgrade utilizes the car's camera and sensor systems to accurately detect traffic signals, helping the vehicle navigate intersections more effectively. </p>
            </div>
          </div>
      </div>
      <div className="container2">
          <div className='card'>
            <div className='front3'></div>
            <div className='back'>
            <h1>Microsoft</h1>
            <p style={{paddingRight:'1rem', paddingLeft:'1rem'}}>Microsoft unveils Windows 11: Microsoft has officially announced Windows 11, the highly anticipated successor to Windows 10. Windows 11 brings a fresh and modern user interface, centered around a simplified Start menu, redesigned taskbar, and improved multitasking capabilities.  One of the most significant additions is the integration of Android apps through the Microsoft Store, enabling users to run their favorite mobile applications directly on their Windows devices.</p>
            </div>
          </div>
      </div>
      <div className="container2">
          <div className='card'>
            <div className='front4'></div>
            <div className='back'>
            <h1>Facebook</h1>
            <p style={{paddingRight:'1rem', paddingLeft:'1rem'}}>Facebook has partnered with renowned eyewear manufacturer EssilorLuxottica to develop a new generation of smart glasses. Known as Ray-Ban Stories, these stylish eyewear devices combine fashion with cutting-edge technology. The smart glasses allow users to capture photos and videos, listen to music, and answer phone calls, all through discreet built-in cameras and speakers. The glasses sync with the Facebook View app, which provides a seamless way to store and share content captured with the device. </p>
            </div>
          </div>
      </div>
      <div className="container2">
          <div className='card'>
            <div className='front5'></div>
            <div className='back'>
            <h1>Google</h1>
            <p style={{paddingRight:'1rem', paddingLeft:'1rem'}}>Google launches Tensor Processing Units (TPUs): Google has introduced its latest iteration of Tensor Processing Units (TPUs), custom-designed chips specifically tailored for accelerating artificial intelligence (AI) workloads. These new TPUs boast significant improvements in performance and efficiency compared to their predecessors. The advanced architecture of the chips enables faster and more accurate AI computations, making them ideal for machine learning tasks such as natural language processing, computer vision, and deep learning. </p>
            </div>
          </div>
      </div>
        </section>
    </div>
    )
}

export default News;