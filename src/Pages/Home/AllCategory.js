import React from 'react';
import accessories from '../../Images/category/accessories.png';
import combo from '../../Images/category/combo.png';
import concrete from '../../Images/category/concrete.png';
import drill from '../../Images/category/drill.png';
import mowers from '../../Images/category/mowers.png';
import ope from '../../Images/category/ope.png';

const AllCategory = () => {
    return (
        <div>
            <div className='container mx-auto px-12  md:px-0 lg:px-0 py-3' >
                <div className='text-center mx-22'>
                    <h3 className="text-xl my-2 underline underline-offset-4">Category</h3>
                    <h2 className="text-4xl  text-[#0f172a] font-bold px-22">Category of our tools</h2>
                </div>
                <div className='grid justify-items-center md:grid-cols-3 my-4 md:my-12 gap-6' >
                    <div className="card rounded-[15px] w-80 md:w-96 bg-[#3d4451] text-white  ">
                        <figure><img src={accessories} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">
                                Accessories
                            </h2>
                        </div>
                    </div>
                    <div className="card rounded-[15px] w-80 md:w-96 bg-[#3d4451] text-white  ">
                        <figure><img src={combo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">
                                Combo Kits
                            </h2>
                        </div>
                    </div>
                    <div className="card rounded-[15px] w-80 md:w-96 bg-[#3d4451] text-white  ">
                        <figure><img src={concrete} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">
                                Concrete & Masonry
                            </h2>
                        </div>
                    </div>
                    <div className="card rounded-[15px] w-80 md:w-96 bg-[#3d4451] text-white  ">
                        <figure><img src={drill} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">
                                Drill & Fastening
                            </h2>
                        </div>
                    </div>
                    <div className="card rounded-[15px] w-80 md:w-96 bg-[#3d4451] text-white  ">
                        <figure><img src={mowers} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">
                                Lawn Mowers
                            </h2>
                        </div>
                    </div>
                    <div className="card rounded-[15px] w-80 md:w-96 bg-[#3d4451] text-white  ">
                        <figure><img src={ope} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">
                                Outdoor Power Equipment
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCategory;