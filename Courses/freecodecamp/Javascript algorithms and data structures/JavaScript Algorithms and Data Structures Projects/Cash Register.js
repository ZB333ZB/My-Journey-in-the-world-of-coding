function checkCashRegister(price, cash, cid) {
    const unitValue = {
        penny: 0.01,
        nickel: 0.05,
        dime: 0.1,
        quarter: 0.25,
        one: 1,
        five: 5,
        ten: 10,
        twenty: 20,
        hundred: 100
    }

    const regStatus = {
        open: 'OPEN',
        closed: 'CLOSED',
        noFunds: 'INSUFFICIENT_FUNDS'
    }

    const copyKeys = (obj) => {
        let result = Object.assign(obj);
        return Object.keys(result).reduce((a, k) => ({ ...a, [k]: 0 }), {});
    }

    const removeZeroValues = (obj) => {
        return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != 0));
    }

    const removeAllProps = (obj) => {
        return Object.keys(obj).forEach((k) => delete obj[k]);
    }
    //↓↓↓I use no libraries to deal with float precision. This is the way-out
    const float = (num) => {
        return Math.round(num * 100) / 100;
    }

    const countChange = (change, cid) => {
        let cidObj = Object.fromEntries(cid), result = copyKeys(cidObj), remain = change;
        while (remain > 0) {
            while (remain - unitValue.hundred >= 0 && cidObj['ONE HUNDRED'] > 0) {
                result['ONE HUNDRED'] = float(result['ONE HUNDRED'] + unitValue.hundred);
                cidObj['ONE HUNDRED'] = float(cidObj['ONE HUNDRED'] - unitValue.hundred);
                remain = float(remain - unitValue.hundred);
            }
            while (remain - unitValue.twenty >= 0 && cidObj.TWENTY > 0) {
                result.TWENTY = float(result.TWENTY + unitValue.twenty);
                cidObj.TWENTY = float(cidObj.TWENTY - unitValue.twenty);
                remain = float(remain - unitValue.twenty);
            }
            while (remain - unitValue.ten >= 0 && cidObj.TEN > 0) {
                result.TEN = float(result.TEN + unitValue.ten);
                cidObj.TEN = float(cidObj.TEN - unitValue.ten);
                remain = float(remain - unitValue.ten);
            }
            while (remain - unitValue.five >= 0 && cidObj.FIVE > 0) {
                result.FIVE = float(result.FIVE + unitValue.five);
                cidObj.FIVE = float(cidObj.FIVE - unitValue.five);
                remain = float(remain - unitValue.five);
            }
            while (remain - unitValue.one >= 0 && cidObj.ONE > 0) {
                result.ONE = float(result.ONE + unitValue.one);
                cidObj.ONE = float(cidObj.ONE - unitValue.one);
                remain = float(remain - unitValue.one);
            }
            while (remain - unitValue.quarter >= 0 && cidObj.QUARTER > 0) {
                result.QUARTER = float(result.QUARTER + unitValue.quarter);
                cidObj.QUARTER = float(cidObj.QUARTER - unitValue.quarter);
                remain = float(remain - unitValue.quarter);
            }
            while (remain - unitValue.dime >= 0 && cidObj.DIME > 0) {
                result.DIME = float(result.DIME + unitValue.dime);
                cidObj.DIME = float(cidObj.DIME - unitValue.dime);
                remain = float(remain - unitValue.dime);
            }
            while (remain - unitValue.nickel >= 0 && cidObj.NICKEL > 0) {
                result.NICKEL = float(result.NICKEL + unitValue.nickel);
                cidObj.NICKEL = float(cidObj.NICKEL + unitValue.nickel);
                remain = float(remain - unitValue.nickel);
            }
            while (remain - unitValue.penny >= 0 && cidObj.PENNY > 0) {
                result.PENNY = float(result.PENNY + unitValue.penny);
                cidObj.PENNY = float(cidObj.PENNY - unitValue.penny);
                remain = float(remain - unitValue.penny);
            }
            if (remain > 0) { removeAllProps(result); result.status = regStatus.noFunds; break; }
        }
        if ('status' in result) return Object.entries(result);
        return Object.entries(removeZeroValues(result)).reverse();
    }

    let change = float(cash - price), cidTotal = 0, result = { status: '', change: [] };

    if (cid.filter(e => e[1] > 0) != [] && change >= 0) {
        cidTotal = cid.reduce((r, e) => r += float(e[1]), 0);
        if (cidTotal > change) {
            const cChange = countChange(change, cid);
            if (cChange[0][1] == regStatus.noFunds) {
                result.status = regStatus.noFunds;
                result.change = [];
                return result;
            }
            result.status = regStatus.open;
            result.change = cChange;
            return result;
        }
        else if (cidTotal == change) {
            result.status = regStatus.closed;
            result.change = cid;
            return result;
        }
        else if (cidTotal < change) {
            result.status = regStatus.noFunds;
            result.change = [];
            return result;
        }
    }
    return {};
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);