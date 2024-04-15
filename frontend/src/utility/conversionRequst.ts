export const convertFromEURtoRSD = async (rate: any, spreadPercentage: any,amount: any) => {
    // const spreadPercentage = 0.025 / 100;
    // const rate = 0.0082327;
    //

    if(rate === null){
        rate = 0.83;
    }
    const spread = amount * spreadPercentage;
    const amountWithoutSpread = amount + spread;
    return amountWithoutSpread / rate;
}

export const convertFromRSDtoEUR = async (rate: any, spreadPercentage: any,amount: any) => {
    // const spreadPercentage = 0.025 / 100;
    // const rate = 0.0082327;

    if(rate === null){
        rate = 0.83;
    }

    const amountWithoutSpread = amount*rate;
    const spread = amountWithoutSpread*spreadPercentage;
    return amountWithoutSpread - spread;
}