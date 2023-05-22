import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AllToyCard from "../components/AllToyCard";
import api from '../config/api';


const AllToys = () => {
    const [allToy, setAllToy] = useState([]);
    const [metaData, setMetaData] = useState({page: 1, perPage: 10, count: 0, totalPages:1});
    const dataFetchedRef = useRef(null);

    const getAllToys = (page, search_query="")=>{
        api.get(`/get-all-toys?page=${page}&search_query=${search_query}`).then(resp=>{
            setAllToy(resp.data.toys);
            setMetaData({
                page: resp.data.page,
                perPage: resp.data.perPage,
                count: resp.data.count,
                totalPages: resp.data.totalPages
            });
        });
    };

    useEffect(()=>{
        if(dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        getAllToys(metaData.page); 
    }, []);

    return (
        <div>
            <AllToyCard page={metaData.page} setSearch={getAllToys} toys={allToy || []}></AllToyCard>
            <div className="flex flex-col items-center">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing <span className="font-semibold text-gray-900 dark:text-white">{((metaData.page - 1) * metaData.perPage) + 1}</span> to <span className="font-semibold text-gray-900 dark:text-white">{((metaData.page - 1) * metaData.perPage) + allToy?.length}</span> of <span className="font-semibold text-gray-900 dark:text-white">{metaData.count}</span> Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    <button disabled={metaData.page <= 1} onClick={()=>getAllToys(metaData.page - 1)} className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Prev
                    </button>
                    <button disabled={metaData.page >= metaData.totalPages} onClick={()=>getAllToys(metaData.page + 1)} className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                    </button>
                </div>
                </div>
            </div>
    );
};

export default AllToys;