import React from 'react';

const Topnav = () => {
    return (
        <div className='bg-gray-800 text-white shadow-lg rounded-lg h-20 m-10'>
            <div className='max-w-7xl mx-auto flex items-center justify-between h-20 space-x-52'>
                {/* logo */}
                <div className='flex-1 flex items-center w-fit'>
                    <p className='font-sans text-sky-400 text-5xl pl-20'>슈윗홈</p>
                    <div className='font-sans text-white w-10'>
                        <span className='inline-block p-0 text-sm'>ssu</span>
                        <span className='inline-block p-0'>with</span>
                        <span className='inline-block p-0'>home</span>
                    </div>
                </div>

                {/* menus */}
                <div className='flex items-center w-fit space-x-5'>
                    <a className='flex px-2 py-3 font-medium 
                    hover:border-b-slate-500 border-b-gray-800 border-b-2 cursor-pointer transition-all'>자취방</a>
                    <a className='flex px-2 py-3 font-medium
                    hover:border-b-slate-500 border-b-gray-800 border-b-2 cursor-pointer transition-all'>커뮤니티</a>
                    <a className='flex px-2 py-3 font-medium
                    hover:border-b-slate-500 border-b-gray-800 border-b-2 cursor-pointer transition-all'>공동구매</a>
                </div>

                {/* login */}
                <div className='flex items-center w-fit space-x-5 pr-10'>
                    <a className='flex px-2 py-3 font-medium
                    hover:border-b-slate-500 border-b-gray-800 border-b-2 cursor-pointer transition-all'>로그인</a>
                    <a className='flex px-2 py-3 font-medium
                    hover:border-b-slate-500 border-b-gray-800 border-b-2 cursor-pointer transition-all'>회원가입</a>
                </div>
            </div>
        </div>
    );
};

export default Topnav;