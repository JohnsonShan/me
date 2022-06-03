// Union find
var accountsMerge = function(accounts) {
    let parents = Array(accounts.length).fill().map((account, idx) => idx);
    console.log(parents)
    const find = (idx) => {
        if (parents[idx] === idx) return idx;
        else return find(parents[idx]);
    }

    const union = (x, y) => {
        parents[y] = parents[x];
    }
    
    let hash = {};
    for (let idx = 0; idx < accounts.length; idx++) {
        let account = accounts[idx];
        for (let i = 1; i < account.length; i++) {
            let email = account[i];
            if (!(email in hash)) hash[email] = idx;
            // If the email already exists in the hash, then the current account is a duplicate account
            // Union the current account's parent index to the hash[email]'s parent index
            else {
                let parentIdx = hash[email];
                union(find(parentIdx), find(idx));
            }
        }
    }

    // Compress the paths
    for (let i = 0; i < parents.length; i++) parents[i] = find(i);

    // Create the disjoint sets
    let disjoint = {};
    for (let i = 0; i < accounts.length; i++) {
        let parent = parents[i];
        if (!(parent in disjoint)) disjoint[parent] = new Set();
        accounts[i].forEach((account, idx) => {
            if (idx === 0) return;
            disjoint[parent].add(account);
        });
    }

    // Create the merged accounts in sorted order
    let output = [];
    for (let key of Object.keys(disjoint)) {
        let name = accounts[key][0];
        let sorted = [...disjoint[key]].sort();
        output.push([name, ...sorted]);
    }
    return output;
};