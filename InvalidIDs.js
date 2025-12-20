
const ids = "11-22";
const tokens = ids.split(',');
const cleanedTokens = tokens.map(t => t.split('-'));
const ranges = cleanedTokens.map(([start, end]) => [parseInt(start), parseInt(end)])


const KMPAlgorithm = (string) => {
    s = String(string);

    const n = s.length;
    const pi = Array(n).fill(0);

    for (let i = 1, j = 0; i < n; i++) {
        while (j > 0 && s[i] !== s[j]) {
            j = pi[j-1];
        }
        if (s[i] === s[j]) j++;
        pi[i] = j;

    }
    const lps = pi[n-1];
    const period = n - lps;
    let counter = 0;

    if (lps > 0 && n % period === 0) {
        const unit = s.slice(0, period);
        const time = n / period;
        return { unit, time }
    }
    return null;

}

let counter = 0;

for (const [start, end] of ranges) {
    for (let i = start; i <= end; i++) {
        if (KMPAlgorithm(i) !== null) {
            counter += 1
        }
        
    }
}

console.log(counter)



