import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box className="p-1">
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Review() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className="w-full">
            <Box className="border-b border-gray-500">
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Description" {...a11yProps(0)} />
                    <Tab label="Review" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div class="mt-8 flow-root sm:mt-6">
                    <h1 class="text-xl sm:text-2xl font-bold">Delivered To Your Door</h1>
                    <p class="mt-4 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
                    <h1 class="mt-8 text-xl sm:text-2xl font-bold">From the Fine Farms of Brazil</h1>
                    <p class="mt-4 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
                    <p class="mt-4 text-sm sm:text-base">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div class="min-w-screen  bg-gray-50 flex items-center justify-center py-2">
                    <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-12 text-gray-800">
                        <div class="w-full max-w-6xl mx-auto">
                            <div class="text-center max-w-xl mx-auto">
                                <h1 class="text-3xl md:text-4xl font-bold mb-5 text-gray-600">What people <br/>are saying.</h1>
                                <div class="text-center mb-10">
                                    <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 mx-1"></span>
                                    <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 mx-1"></span>
                                    <span class="inline-block w-40 h-1 rounded-full bg-indigo-500 mx-1"></span>
                                    <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 mx-1"></span>
                                    <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 mx-1"></span>
                                </div>
                            </div>
                            <div class="-mx-3 md:flex items-start">
                                <div class="px-3 md:w-1/3">
                                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div class="w-full flex mb-4 items-center">
                                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=1" alt=""/>
                                            </div>
                                            <div class="flex-grow pl-3">
                                                <h6 class="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                                            </div>
                                        </div>
                                        <div class="w-full">
                                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                        </div>
                                    </div>
                                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div class="w-full flex mb-4 items-center">
                                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=2" alt=""/>
                                            </div>
                                            <div class="flex-grow pl-3">
                                                <h6 class="font-bold text-sm uppercase text-gray-600">Stevie Tifft.</h6>
                                            </div>
                                        </div>
                                        <div class="w-full">
                                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-3 md:w-1/3">
                                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div class="w-full flex mb-4 items-center">
                                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=3" alt=""/>
                                            </div>
                                            <div class="flex-grow pl-3">
                                                <h6 class="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                                            </div>
                                        </div>
                                        <div class="w-full">
                                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                        </div>
                                    </div>
                                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div class="w-full flex mb-4 items-center">
                                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=4" alt=""/>
                                            </div>
                                            <div class="flex-grow pl-3">
                                                <h6 class="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
                                            </div>
                                        </div>
                                        <div class="w-full">
                                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventor voluptatum nostrum aqua, corrupts, vitae esse id accuses dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-3 md:w-1/3">
                                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div class="w-full flex mb-4 items-center">
                                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=5" alt=""/>
                                            </div>
                                            <div class="flex-grow pl-3">
                                                <h6 class="font-bold text-sm uppercase text-gray-600">Nevada Herbertson.</h6>
                                            </div>
                                        </div>
                                        <div class="w-full">
                                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariahs deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                        </div>
                                    </div>
                                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div class="w-full flex mb-4 items-center">
                                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=6" alt=""/>
                                            </div>
                                            <div class="flex-grow pl-3">
                                                <h6 class="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                                            </div>
                                        </div>
                                        <div class="w-full">
                                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, capitate quas totam!<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES -->
                <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                    <div>
                        <a title="Buy me a beer" rel="noreferrer" href="" target='_blank' class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                            <img class="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" alt='' />
                        </a>
                    </div>
                </div> */}
            </CustomTabPanel>
        </Box>
    );
}