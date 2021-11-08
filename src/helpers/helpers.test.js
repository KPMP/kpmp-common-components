import { isExpectedPath } from './helpers';

describe('isExpectedPath', () => {
    it('should return true when the paths are matching without sub path', async () => {
        const pathname = '/'
        const expectedPath ='/'
        const expectedResult = true
        const isExpectedPathnameResult = isExpectedPath(pathname, expectedPath)
        
        expect(isExpectedPathnameResult).toBe(expectedResult)
    });
    it('should return false when the paths are not matching space vs /', async () => {
        const pathname = ''
        const expectedPath ='/'
        const expectedResult = false
        const isExpectedPathnameResult = isExpectedPath(pathname, expectedPath)
        
        expect(isExpectedPathnameResult).toBe(expectedResult)
    });
    it('should return true when the paths are matching with blanks', async () => {
        const pathname = ''
        const expectedPath =''
        const expectedResult = true
        const isExpectedPathnameResult = isExpectedPath(pathname, expectedPath)
        
        expect(isExpectedPathnameResult).toBe(expectedResult)
    });
    it('should return false when the paths are not matching with wrong pathname /foo vs /', async () => {
        const pathname = '/foo'
        const expectedPath ='/'
        const expectedResult = false
        const isExpectedPathnameResult = isExpectedPath(pathname, expectedPath)
        
        expect(isExpectedPathnameResult).toBe(expectedResult)
    });
    it('should return true when the base paths are matching with subpath', async () => {
        const pathname = '/explorer/'
        const expectedPath ='/explorer/'
        const expectedResult = true
        const isExpectedPathnameResult = isExpectedPath(pathname, expectedPath)
        
        expect(isExpectedPathnameResult).toBe(expectedResult)
    });
    it('should return true when the base paths are matching with many subpaths', async () => {
        const pathname = '/explorer/foo/'
        const expectedPath ='/explorer/'
        const expectedResult = true
        const isExpectedPathnameResult = isExpectedPath(pathname, expectedPath)
        
        expect(isExpectedPathnameResult).toBe(expectedResult)
    });
    it('should return true when the base paths are not matching but path includes the expected', async () => {
        const pathname = '/foo/explorer/'
        const expectedPath ='/explorer/'
        const expectedResult = false
        const isExpectedPathnameResult = isExpectedPath(pathname, expectedPath)
        
        expect(isExpectedPathnameResult).toBe(expectedResult)
    });
});

