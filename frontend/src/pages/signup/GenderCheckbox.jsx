const GenderChcekbox = () => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-tex">Male</span>
                    <input type="checkbox" className="checkbox border-slate-900"/>
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-tex">Female</span>
                    <input type="checkbox" className="checkbox border-slate-900"/>
                </label>
            </div>
        </div>
    )
}

export default GenderChcekbox;

// const GenderChcekbox = () => {
//     return (
//         <div className="flex">
//             <div className="form-control">
//                 <label className={`label gap-2 cursor-pointer`}>
//                     <span className="label-tex">Male</span>
//                     <input type="checkbox" className="checkbox border-slate-900"/>
//                 </label>
//             </div>
//             <div className="form-control">
//                 <label className={`label gap-2 cursor-pointer`}>
//                     <span className="label-tex">Female</span>
//                     <input type="checkbox" className="checkbox border-slate-900"/>
//                 </label>
//             </div>
//         </div>
//     )
// }

// export default GenderChcekbox;