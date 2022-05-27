import React from 'react';
import image from './burhan.jpg';
const Portfolio = () => {
    return (
        <div className='my-5 text-center'>
            <text className="text-3xl underline underline-offset-8 py-3 text-center">My Portfolio</text>
            <div>
                <div>
                    <figure className='w-[250px] mx-auto py-5'>
                        <img className='rounded-xl' src={image} alt="" />
                    </figure>
                    <h3 className="text-3xl py-1">Name:  Md Borhan Uddin Ashik</h3>
                    <a href="mailto:arburhanar@gmail.com" className="text-xl">Email:  <span className='hover:underline'>arburhanar@gmail.com</span> </a>
                    <button className='block mx-auto text-xl pt-2' onClick={() => {
                        window.open('https://www.linkedin.com/in/burhan128454/')
                    }}>
                        LinkedIn: <span className='text-secondary underline'>in/burhan128454</span>
                    </button>
                </div>
                <div className='shadow max-w-xl mx-auto rounded-xl py-4 my-8'>
                    <h3 className="text-xl font-bold">My Educational Background</h3>
                    <div className='py-3'>
                        <h4 className="text-xl underline">SSC</h4>
                        <p className="text-md">Science</p>
                        <p className="text-md">Kaligram Dodangi High School<address>Manda, Naogaon</address> </p>
                        <p className="text-md">Passing Year: 2017</p>

                    </div>
                    <div>
                        <h4 className="text-xl underline">Diploma in Engineering</h4>
                        <p className="text-md"> Computer Technology</p>
                        <p className="text-md">Rajshahi Polytechnic Institute<address>Rajshahi</address> </p>
                        <p className="text-md">Session: 2017-18</p>
                    </div>
                </div>
                <div className='my-14'>
                    <h2 className="text-2xl font-bold mb-4">My Skills</h2>
                    <div className='text-left flex flex-col md:flex-row justify-center items-center md:gap-20'>
                        <div>
                            <div>
                                <label className='block font-bold'>HTML</label>
                                <progress className="progress progress-success h-3 w-56" value="90" max="100"></progress>
                            </div>
                            <div>
                                <label className='block font-bold'>CSS</label>
                                <progress className="progress progress-success h-3 w-56" value="85" max="100"></progress>
                            </div>
                            <div>
                                <label className='block font-bold'>JavaScript</label>
                                <progress className="progress progress-success h-3 w-56" value="70" max="100"></progress>
                            </div>
                            <div>
                                <label className='block font-bold'>React</label>
                                <progress className="progress progress-success h-3 w-56" value="65" max="100"></progress>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className='block font-bold'>Firebase</label>
                                <progress className="progress progress-success h-3 w-56" value="35" max="100"></progress>
                            </div>
                            <div>
                                <span className='block font-bold'>Node.js</span>
                                <progress className="progress progress-success h-3 w-56" value="30" max="100"></progress>
                            </div>
                            <div>
                                <label className='block font-bold'>Express.js</label>
                                <progress className="progress progress-success h-3 w-56" value="25" max="100"></progress>
                            </div>
                            <div>
                                <label className='block font-bold'>Mongodb</label>
                                <progress className="progress progress-success h-3 w-56" value="45" max="100"></progress>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-8'>
                    <h3 className="text-2xl font-bold py-6">My Project</h3>
                    <div className='flex flex-col md:flex-row justify-center gap-4 px-4' >
                        <div className="card w-80 md:w-96 border border-rounded shadow hover:bg-base-300 hover:shadow-md  ">
                            <div className="card-body">
                                <h2 className="card-title">Grocery Warehouse Management </h2>
                                <p className='text-left'>AR Grocery is a stock management website. Here the user will be able to increase the quantity of products after logging in, will be able to count how many deliveries have been made, will be able to add and view different user based products, will be able to delete products. This is a fully responsive website. Mongodb has been chosen as the firebase authentication system, database. Hope you like it :)</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => {
                                        window.open('https://inventory-management-7b51a.web.app/')
                                    }} className="btn">View Project</button>
                                </div>
                            </div>
                        </div>


                        <div className="card w-80 md:w-96 border border-rounded shadow hover:bg-base-300 hover:shadow-md    ">
                            <div className="card-body">
                                <h2 className="card-title">AR Wild-Grapher</h2>
                                <p className='text-left'>This website for independent services provider website. This website made for photographer who give photograph services. where user can book for photo shoot.</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => {
                                        window.open('https://ar-wild-grapher.web.app/')
                                    }} className="btn">View Project</button>
                                </div>
                            </div>
                        </div>


                        <div className="card w-80 md:w-96 border border-rounded shadow hover:bg-base-300 hover:shadow-md    ">
                            <div className="card-body">
                                <h2 className="card-title">Influencer gear</h2>
                                <p className='text-left'>
                                    Influencer gear a static one page website. For Designing this website to useing CSS & Bootstrap
                                </p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => {
                                        window.open('https://arburhan.github.io/influencer-gear/')
                                    }} className="btn">View Project</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;