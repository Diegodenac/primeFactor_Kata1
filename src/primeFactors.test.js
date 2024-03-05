describe('Generate PrimeFactors', () =>{
    it('should return an empty array for 1', () => {
        let pF = new PrimeFactors();
        expect(pF.generate(1)).toEqual([]);
    });
});

class PrimeFactors{
    generate(n) {
        return [];
    };
};