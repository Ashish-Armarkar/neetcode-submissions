class Solution {
    trap(h) {
        let l = 0;
        let r = h.length - 1;

        let maxL = 0;
        let maxR = 0;

        let w = 0;

        while (l <= r) {
            if (h[l] <= h[r]) {
                if (h[l] >= maxL) {
                    maxL = h[l];
                } else {
                    w += maxL - h[l];
                }
                l++;
            } else {
                if (h[r] >= maxR) {
                    maxR = h[r];
                } else {
                    w += maxR - h[r];
                }
                r--;
            }
        }

        return w;
    }
}