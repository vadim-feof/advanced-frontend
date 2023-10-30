export default function lazyLoadingTimeout<T>(dynamicImport: Promise<T>, countMSec: number = 1000): Promise<T>{
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve(dynamicImport)}, countMSec);
    })
};
