javascript:var joueurs=""; var usersBP=channel.data.users; for(i in usersBP){joueurs+=usersBP[i].displayName; if(usersBP[i].role != ""){joueurs+=" (m)"} joueurs+="\r\n";} alert(joueurs);