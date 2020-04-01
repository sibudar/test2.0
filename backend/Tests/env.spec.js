
require("dotenv").config();

describe(' Testing enviroment variables', () => {
    it('should have a host', () => {
        expect(process.env.HOST).toBeDefined()
    })
    
})