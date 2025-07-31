/**
 * 배열을 지정된 크기로 나누어 2차원 배열로 반환하는 함수
 * @param array - 나눌 배열
 * @param size - 각 청크의 크기
 * @returns 2차원 배열
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (size <= 0) {
    throw new Error('Size must be greater than 0');
  }
  
  if (!Array.isArray(array)) {
    throw new Error('First argument must be an array');
  }
  
  const result: T[][] = [];
  
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  
  return result;
}