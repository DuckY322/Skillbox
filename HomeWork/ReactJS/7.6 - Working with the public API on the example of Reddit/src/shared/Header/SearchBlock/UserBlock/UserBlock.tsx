import React from 'react';
import {EIcons, Icon} from "../../../Icon";
import styles from "./userBlock.css"
import {Break} from "../../../Break";
import {EColor, Text} from "../../../Text";

interface IUserBlockProps {
    avatarSrc?: string;
    username?: string;
}

const linkToConnect = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
    return (
        <a
            href={linkToConnect}
            className={styles.userBox}>
            <div className={styles.avatarBox}>
                {avatarSrc
                    ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
                    : <Icon name={EIcons.Anon} full/>
                }
            </div>

            <div className={styles.username}>
                <Break size={12}/>
                <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Aноним'}</Text>
            </div>
        </a>
    );
}
