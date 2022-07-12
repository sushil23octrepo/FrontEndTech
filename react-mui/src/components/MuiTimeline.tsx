import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineDot,
    TimelineContent,
    TimelineOppositeContent
} from "@mui/lab"

export const MuiTimeline = () => {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">10:00 am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    City A
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
            <TimelineOppositeContent color="text.secondary">10:30 am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    City B
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
            <TimelineOppositeContent color="text.secondary">11:00 am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                    City C
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}
