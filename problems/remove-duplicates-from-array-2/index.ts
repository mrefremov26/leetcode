function removeDuplicates(nums: number[]): number {
    let prevValue = nums[0] - 1;

    let hasDouble = false

    nums.splice(0, nums.length, ...nums.filter(
        (item) => {
            /**
            * Если текущий элемент не равен предыдущему. 
             */
            if (item !== prevValue) {
                prevValue = item;
                hasDouble = false;
                return true;
            };
             /**
            * Если текущий элемент РАВЕН предыдущему. 
             */
            if (hasDouble) {
                return false;
            }
             
            hasDouble = true;
            return true;
        }
    ));

    return nums.length;
};
