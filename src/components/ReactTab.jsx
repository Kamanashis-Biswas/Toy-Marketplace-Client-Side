import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyDetailsCard from './ToyDetailsCard';

const ReactTab = () => {
    return (
        <div className='text-center'>
            <Tabs forceRenderTabPanel defaultIndex={1}>
                <TabList>
                    <Tab>Toy Car</Tab>
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab>Sports Car</Tab>
                            <Tab>Truck</Tab>
                            <Tab>Regular Car</Tab>
                            <Tab>Mini Fire Truck</Tab>
                        </TabList>
                        <TabPanel>
                            <p>Sports Car</p>
                            <div className='md:flex gap-4'>
                                <ToyDetailsCard></ToyDetailsCard>
                                <ToyDetailsCard></ToyDetailsCard>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <p>Track</p>
                            <div className='md:flex gap-4'>
                                <ToyDetailsCard></ToyDetailsCard>
                                <ToyDetailsCard></ToyDetailsCard>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <p>Regular Car</p>
                            <div className='md:flex gap-4'>
                                <ToyDetailsCard></ToyDetailsCard>
                                <ToyDetailsCard></ToyDetailsCard>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <p>Mini Fire Track</p>
                            <div className='md:flex gap-4'>
                                <ToyDetailsCard></ToyDetailsCard>
                                <ToyDetailsCard></ToyDetailsCard>
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default ReactTab;