const QuestionData = [
    {
        questionId: 1,
        title: '如何评价GenXhin Compact的新卡池角色强度?',
        content: '以上就是有关GenXhin Compact新角色有关的内容了，大家有什么想法欢迎在评论区留言哦',
        userName: '路人A',
        created: new Date(),
        answers: [
            {
                answerId: 1,
                content: '强无敌，抽!',
                userName: 'Hutao',
                created: new Date(),
            }, {
                answerId: 2,
                content: '索 然 无 味',
                userName: 'Raiden Shogun',
                created: new Date()
            }
        ]
    }, {
        questionId: 1,
        title: '如何评价X社新作销量不如XX游戏一个月流水?',
        content: '大家有什么想法欢迎在评论区留言哦',
        userName: 'Thoma',
        created: new Date(),
        answers: []
    }
]

export const getUnansweredQuestions = () => QuestionData.filter(q => q.answers.length === 0);