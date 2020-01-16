import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo-hooks";
import { FOLLOW, UNFOLLOW } from "./FollowButtonQueries";
import FollowButtonPresenter from "./FollowButtonPresenter";

const FollowButtonContainer = (isFollowing, id) => {
    const [isFollowingS, setIsFolloing] = useState(isFollowing);
    const followMutation = useMutation(FOLLOW, { variables: { id } });
    const unfollowMutation = useMutation(UNFOLLOW, { variables: { id } });

    const onClick = () => {
        if (isFollowingS === true) {
            setIsFolloing(false);
            unfollowMutation();
        } else {
            setIsFolloing(true);
            followMutation();
        }
    };
    return <FollowButtonPresenter onClick={onClick} isFollowing={isFollowingS} />
};

FollowButtonContainer.propTypes = {
    isFollowing: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
};

export default FollowButtonContainer;