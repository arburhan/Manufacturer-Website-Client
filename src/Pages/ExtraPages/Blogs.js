import React from 'react';

const Blogs = () => {
    return (
        <div className='py-5'>
            <h2 className="text-3xl underline underline-offset-4 text-center">Blogs</h2>
            <div className='flex flex-col items-center justify-center my-3'>
                <div className='w-80 md:w-[650px] p-4 border-4 rounded-xl my-1 bg-base-200'>
                    <h3 className="text-2xl">1. How will you improve the performance of a React Application?</h3>
                    <div className='' >
                        <p>
                            Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. While this will lead to a faster user interface without specifically optimizing for performance for many cases, there are ways where you can still speed up your React application. This post will go over some useful techniques you can use to improve your React code.
                        </p>
                        <ul className='list-disc p-5'>
                            <li>Function/Stateless Components and React.PureComponent</li>
                            <li>Using Production Mode Flag in Webpack</li>
                            <li>Dependency optimization</li>
                            <li>Avoid Additional HTML Element Wrappers</li>
                            <li>Avoid Inline Function Definition in the Render Function.</li>
                            <li>Avoid using Index as Key for map</li>
                            <li>Spreading props on DOM elements</li>
                            <li>Use Reselect in Redux to Avoid Frequent Re-render</li>
                            <li>Avoid Async Initialization in componentWillMount()</li>
                            <li>Memoize React Components</li>
                        </ul>
                    </div>

                </div>
                <div className='w-80 md:w-[650px] p-4 border-4 rounded-xl my-1 bg-base-200'>
                    <h3 className="text-2xl">2. What are the different ways to manage a state in a React application?</h3>
                    <div>
                        <p>
                            The Four Kinds of React State to Manage
                        </p>
                        <ol className='list-decimal p-5'>
                            <li>Local State</li>
                            <li>Global State</li>
                            <li>Server State</li>
                            <li>URL State</li>
                        </ol>
                    </div>
                </div>
                <div className='w-80 md:w-[650px] p-4 border-4 rounded-xl my-1 bg-base-200'>
                    <h2 className="text-2xl">3. How does prototypical inheritance work?</h2>
                    <div>
                        <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.Example In the given example, there are two objects ‘person’ and ‘GFGuser’. The object ‘GFGuser’ inherits the methods and properties of the object ‘person’ and further uses them.</p>
                    </div>
                </div>
                <div className='w-80 md:w-[650px] p-4 border-4 rounded-xl my-1 bg-base-200'>
                    <h2 className="text-2xl">4.Why you do not set the state directly in React?</h2>
                    <p className="text-xl">For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</p>
                    <p>At first, when data is fetched from a place, it is empty at the beginning. React stores data between setProducts or setAnyname whenever any data is available. And when the state of the reaction changes, the browser renders it. The reason for giving array in useState ([]) is that it saves data from seState in array form. Then data from products can be used.</p>
                </div>
                <div className='w-80 md:w-[650px] p-4 border-4 rounded-xl my-1 bg-base-200'>
                    <h2 className="text-2xl">5. You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>Using array filter method I can search product by name. suppose I have tools array of object. here I can use products.filter (tools =`&gt;` tool.name === 'Cat Drill' ) then print. Simply. I can search products by name using filter array method.</p>
                </div>
                <div className='w-80 md:w-[650px] p-4 border-4 rounded-xl my-1 bg-base-200'>
                    <h2 className="text-2xl">6. What is a unit test? Why should write unit tests?</h2>
                    <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."</p>
                    <p>
                        <span className="text-md">Some Reasons Why Unit Testing Matters </span>
                        <ul className='list-disc p-5'>
                            <li>Discipline and Rigor</li>
                            <li>Reduce Cyclomatic Complexity</li>
                            <li>Measure the Effort Needed to Modify an Existing Feature</li>
                            <li>Enforces Inversion of Control</li>
                            <li>Code Coverage</li>
                            <li>Performance</li>
                        </ul>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;