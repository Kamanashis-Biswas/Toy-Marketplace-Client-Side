import { useEffect, useRef, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import api from '../config/api';
import FilteredToys from './FilterdToys';



const ReactTab = () => {
    const [toys, setToys] = useState(null);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const category = ["sports_car", "truck", "regular_car", "mini_fire_truck"];
    useEffect(() => {
        api.get(`/get-category-toy?category=${category[currentTabIndex]}`).then(data => {
            setToys(data.data);
        });

    }, [currentTabIndex]);
    return (
        <div className='text-center'>
            <h2 className="text-center my-8 font-bold underline text-3xl">Shop by Category</h2>
            <Tabs forceRenderTabPanel defaultIndex={1}>
                <TabList>
                    <Tab>Toy Car</Tab>
                </TabList>
                <TabPanel>
                    <Tabs onSelect={(evt) => setCurrentTabIndex(evt)} forceRenderTabPanel>
                        <TabList>
                            <Tab>Sports Car</Tab>
                            <Tab>Truck</Tab>
                            <Tab>Regular Car</Tab>
                            <Tab>Mini Fire Truck</Tab>
                        </TabList>
                        <TabPanel>
                            <p>Sports Car</p>
                            <FilteredToys toys={toys || []}></FilteredToys>
                        </TabPanel>
                        <TabPanel>
                            <p>Track</p>
                            <FilteredToys toys={toys || []}></FilteredToys>
                        </TabPanel>
                        <TabPanel>
                            <p>Regular Car</p>
                            <FilteredToys toys={toys || []}></FilteredToys>
                        </TabPanel>
                        <TabPanel>
                            <p>Mini Fire Track</p>
                            <FilteredToys toys={toys || []}></FilteredToys>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default ReactTab;