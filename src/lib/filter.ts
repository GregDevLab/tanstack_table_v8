import { rankItem } from "@tanstack/match-sorter-utils";
import dayjs from "dayjs";
export const dateFilter = (row:any, columnId:any, value:any, addMeta:any) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    console.log("🚀 ~ value:", value);

    if (value[0] && !value[1]) {
        itemRank.passed = dayjs(value[0])
            .hour(0)
            .minute(0)
            .millisecond(0)
            .isBefore(row.getValue(columnId));
    } else if (value[1] && !value[0]) {
        itemRank.passed = dayjs(row.getValue(columnId))
            .hour(0)
            .minute(0)
            .millisecond(0)
            .isBefore(dayjs(value[1]).hour(23).minute(59).millisecond(59));
    } else if (value[0] && value[1]) {
        itemRank.passed =
            dayjs(value[0])
                .hour(0)
                .minute(0)
                .millisecond(0)
                .isBefore(row.getValue(columnId)) &&
            dayjs(row.getValue(columnId))
                .hour(0)
                .minute(0)
                .millisecond(0)
                .isBefore(dayjs(value[1]).hour(23).minute(59).millisecond(59));
    } else {
        itemRank.passed = true;
    }
    addMeta({
        itemRank,
    });
    return itemRank.passed;
};
