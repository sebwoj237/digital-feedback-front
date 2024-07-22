import { Pagination } from "@mantine/core"
import { useEffect, useState } from "react"

export function usePages(array: any[], _pageSize: number, initPage: number = 1) {
    var [arrayRef, setArrayRef] = useState(array)
    var [page, setPage] = useState(initPage)
    var [pagesTotal, setPagesTotal] = useState(1)
    var [pageSize, setPageSizeState] = useState(_pageSize)
    var [pageElements, setPageElements] = useState(array.slice(0,0))

    function handlePageChange(newPage: number) {
        if (newPage > pagesTotal) { newPage = 1 }
        if (newPage < 1) { newPage = pagesTotal }
        setPage(newPage)
    }
    
    useEffect(()=>{
        calculatePages()
    }, [arrayRef, pageSize])

    useEffect(()=>{
        calculateElements()
    }, [page, pageSize, arrayRef])

    function calculatePages() {
        let newPagesTotal = Math.ceil(arrayRef.length / pageSize)
        if (newPagesTotal < 1) { newPagesTotal = 1 }
        if (newPagesTotal < page) {
            setPage(newPagesTotal)
        }
        setPagesTotal(newPagesTotal)
    }

    function calculateElements(curPage = page) {
        const start = (curPage-1)*pageSize
        let end = start + pageSize
        if (end > arrayRef.length) { end = arrayRef.length }
        const newElements = arrayRef.slice(start, end)
        setPageElements(newElements)
    }

    function setArray(newArray: any[]) {
        setArrayRef(newArray)
    }

    function setPageSize(newPageSize: number) {
        if (newPageSize < 1) { newPageSize = 1 }
        setPageSizeState(newPageSize)
    }

    return {
        pageElements: pageElements,
        page: page,
        pagesTotal: pagesTotal,
        pageSize: pageSize,
        setPage: setPage,
        setPageSize: setPageSize,
        setArray: setArray,
        handlePageChange: handlePageChange,
    }
}