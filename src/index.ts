import * as core from '@actions/core'

export async function run(): Promise<void> {
    throw new Error('boom')
}

run().catch(err => {
    core.setFailed((err as Error).message)
})
