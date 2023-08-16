import type { Models } from '@appwrite.io/console';
import { writable } from 'svelte/store';

export const emailTemplate = writable<Models.EmailTemplate>({
    type: null,
    locale: null,
    message: null,
    senderName: '',
    senderEmail: null,
    replyTo: null,
    subject: null
});

export const baseEmailTemplate = writable<Models.EmailTemplate>({
    type: null,
    locale: null,
    message: null,
    senderName: null,
    senderEmail: null,
    replyTo: null,
    subject: null
});

export const smsTemplate = writable<Models.SmsTemplate>({
    type: null,
    locale: null,
    message: null
});
export const baseSmsTemplate = writable<Models.SmsTemplate>({
    type: null,
    locale: null,
    message: null
});
