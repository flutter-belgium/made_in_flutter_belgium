export default function isCrawler(): boolean {
    const disableFetchUserAgents = ['bot', 'googlebot', 'crawler', 'spider', 'robot', 'crawling']
    const userAgent = window.navigator.userAgent
    for (var i = 0; i < disableFetchUserAgents.length; ++i) {
        const disabledUserAgent = disableFetchUserAgents[i]
        if (userAgent.indexOf(disabledUserAgent) >= 0) {
            return true
        }
    }
    return false
}