let isError = false

const validation = {
    isUndefind: (data) => {
        data.map((item) => {
            if (isError) return false
            if (item === undefined) {
                isError = true
            }
        })
        if (isError) {
            isError = false
            return false
        } else return true
    },
    isEqual: (original, copy) => {
        if (original !== copy) {
            isError = true
        }
        if (isError) {
            isError = false
            return false
        } else {
            return true
        }
    },
    isEmptyString: (data) => {
        data.map((item) => {
            if (isError) return false
            if (item === '') {
                isError = true
            }
        })
        if (isError) {
            isError = false
            return false
        } else return true
    }
}

export default validation