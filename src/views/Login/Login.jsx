import React from 'react';

const Login = () => {
    return (
        <div>
            <section className="absolute w-full top-0">
                <div className="absolute top-0 w-full h-full bg-gray-900" style="background-image: url(&quot;https://demos.creative-tim.com/tailwindcss-starter-project/static/media/register_bg_2.2fee0b50.png&quot;); background-size: 100%; background-repeat: no-repeat;"></div>
                <div className="container mx-auto px-4 h-full">
                    <div className="flex content-center items-center justify-center h-full">
                        <div className="w-full lg:w-4/12 px-4 pt-32">
                            <div
                                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                                <div className="rounded-t mb-0 px-6 py-6">
                                    <div className="text-center mb-3">
                                        <h6 className="text-gray-600 text-sm font-bold">Sign in with</h6></div>
                                    <div className="btn-wrapper text-center">
                                        <button
                                            className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                            type="button" style="transition: all 0.15s ease 0s;">
                                            <img alt="..." className="w-5 mr-1"
                                                 src="https://demos.creative-tim.com/tailwindcss-starter-project/static/media/github.4ffd4fe7.svg">Github</img>
                                        </button>
                                        <button
                                            className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                            type="button" style="transition: all 0.15s ease 0s;"><img alt="..."
                                                                                                      className="w-5 mr-1" src="https://demos.creative-tim.com/tailwindcss-starter-project/static/media/google.87be59a1.svg">Google</img>
                                        </button>
                                    </div>
                                    <hr className="mt-6 border-b-1 border-gray-400"/>
                                </div>
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <div className="text-gray-500 text-center mb-3 font-bold"><small>Or sign in with
                                        credentials</small></div>
                                    <form>
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                   htmlFor="grid-password">Email</label>
                                            <input type="email"
                                                   className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                                   placeholder="Email" style="transition: all 0.15s ease 0s;"/>
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                   htmlFor="grid-password">Password</label>
                                            <input type="password"
                                                   className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                                   placeholder="Password" style="transition: all 0.15s ease 0s;"/>
                                        </div>
                                        <div>
                                            <label className="inline-flex items-center cursor-pointer">
                                                <input id="customCheckLogin" type="checkbox"
                                                       className="form-checkbox text-gray-800 ml-1 w-5 h-5"
                                                       style="transition: all 0.15s ease 0s;">
                                                    <span className="ml-2 text-sm font-semibold text-gray-700">Remember me</span>
                                                </input>
                                            </label>
                                        </div>
                                        <div className="text-center mt-6">
                                            <button
                                                className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                                type="button" style="transition: all 0.15s ease 0s;">Sign In
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="flex flex-wrap mt-6">
                                <div className="w-1/2"><a href="#pablo" className="text-gray-300"><small>Forgot
                                    password?</small></a></div>
                                <div className="w-1/2 text-right"><a href="#pablo" className="text-gray-300"><small>Create
                                    new
                                    account</small></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="absolute w-full bottom-0 bg-gray-900 pb-6">
                    <div className="container mx-auto px-4">
                        <hr className="mb-6 border-b-1 border-gray-700"/>
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 px-4">
                                <div className="text-sm text-white font-semibold py-1">Made with <a
                                    href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit"
                                    className="text-white hover:text-gray-400 text-sm font-semibold py-1"
                                    target="_blank">Tailwind
                                    Starter Kit </a></div>
                            </div>
                            <div className="w-full md:w-8/12 px-4">
                                <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                                    <li><a href="https://www.creative-tim.com"
                                           className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                                           target="_blank">Creative Tim</a></li>
                                    <li><a href="https://www.creative-tim.com/presentation"
                                           className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                                           target="_blank">About Us</a></li>
                                    <li><a href="https://creative-tim.com/blog"
                                           className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                                           target="_blank">Blog</a></li>
                                    <li><a
                                        href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                                        className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                                        target="_blank">MIT License</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    );
};

export default Login;
