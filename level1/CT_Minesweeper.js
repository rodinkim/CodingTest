function solution(N, arr1){
	let x = [1, -1, 0, 0, 1, 1, -1, -1];
	let y = [0, 0, 1, -1, 1, -1, 1, -1];
	let answer = [];

    for (let i = 0; i < N; i++){
        for (let j = 0; j <N; j++){
            if (arr1[i][j] === '.') arr1[i][j] = 0;
            else arr1[i][j] = parseInt(arr1[i][j], 10)
        }
    }
    answer = arr1.map(v => [...v]);

    for (let i = 0; i < N; i ++){
        for (let j =0; j < N; j++){
            for (let k = 0; k < x.length; k++){                
                if (j+y[k] < 0) continue;
                else if (j+y[k] > N-1) continue;
                else if (i+x[k] < 0) continue;
                else if (i+x[k] > N-1) continue;
                else answer[j][i] += arr1[j+y[k]][i+x[k]] 
            }if (answer[j][i] > 9) answer[j][i] = 'M'
        }  
    } 

    for (let i = 0; i < N; i++){
        for (let j =0; j <N; j++){
             if (arr1[i][j] !== 0) answer[i][j] = '*'
        }
    }
    
	return answer;
}
let N = 5;
let arr1=[['1', '.', '.', '.', '.'], 
		  ['.', '.', '3', '.', '.'], 
		  ['.', '.', '.', '.', '.'],
		  ['.', '4', '.', '.', '.'], 
		  ['.', '.', '.', '9', '.']]; 
console.log(solution(N, arr1))
